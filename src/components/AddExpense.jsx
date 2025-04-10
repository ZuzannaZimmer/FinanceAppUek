import { useState } from "react";
import { db, storage } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import '../style/AddExpense.css'

function AddExpense({onAdd}) {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [location, setLocation] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!amount || !description) {
      alert("Uzupełnij wszystkie pola!");
      return;
    }

    try {
      let imageUrl = "";

      if (file) {
        // Utwórz referencję do pliku w Storage
        const fileName = `${Date.now()}_${file.name}`;
        const storageRef = ref(storage, `receipts/${fileName}`);

        // Prześlij plik
        await uploadBytes(storageRef, file);

        // Pobierz URL do pobrania
        imageUrl = await getDownloadURL(storageRef);
      }

      // Zapisz dane wydatku w Firestore
      await addDoc(collection(db, "expenses"), {
        amount: parseFloat(amount),
        description,
        receiptUrl: imageUrl,
        createdAt: Timestamp.now(),
        location
      });
      if ("vibrate" in navigator) {
        navigator.vibrate(200); // wibracja przez 200ms
      }
      

      if (onAdd) onAdd();
      // Wyczyść formularz
      setAmount("");
      setDescription("");
      setFile(null);
      alert("Wydatek dodany!");

    } catch (error) {
      console.error("Błąd przy zapisie:", error);
      alert("Wystąpił błąd przy zapisie");
    }
  };
  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      alert("Twoja przeglądarka nie obsługuje geolokalizacji");
      return;
    }
  
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        console.error("Błąd geolokalizacji:", error);
        alert("Nie udało się pobrać lokalizacji");
      }
    );
  };
  

  return (
    <form className="add-expense" onSubmit={handleSubmit}>
      <h2>Dodaj wydatek</h2>
      <input
        type="number"
        placeholder="Kwota"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <br />
      <input
        type="text"
        placeholder="Opis"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <br />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <br />
      <button type="submit">Dodaj</button>
      <button type="button" onClick={handleGetLocation}>
        Dodaj lokalizację
      </button>
      {location && <p>Lokalizacja dodana ✅</p>}

    </form>
  );
}

export default AddExpense;