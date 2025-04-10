import { useState } from "react";
import { db, storage } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

function AddExpense({ onAdd, buttonClass = "btn btn-primary", gpsButtonClass = "btn btn-secondary" }) {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [location, setLocation] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let receiptUrl = "";
    if (file) {
      const storageRef = ref(storage, `receipts/${file.name}`);
      await uploadBytes(storageRef, file);
      receiptUrl = await getDownloadURL(storageRef);
    }

    await addDoc(collection(db, "expenses"), {
      amount: parseFloat(amount),
      description,
      receiptUrl,
      location,
      created: Timestamp.now(),
    });

    setAmount("");
    setDescription("");
    setFile(null);
    setLocation(null);
    onAdd();
  };

  const handleLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Kwota (zł)</label>
        <input
          type="number"
          className="form-control"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Opis</label>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Zdjęcie paragonu</label>
        <input
          type="file"
          className="form-control"
          onChange={(e) => setFile(e.target.files[0])}
        />
      </div>

      <div className="d-flex gap-2">
        <button type="submit" className={buttonClass}>
          Dodaj
        </button>
        <button type="button" onClick={handleLocation} className={gpsButtonClass}>
          Dodaj lokalizację
        </button>
      </div>
    </form>
  );
}

export default AddExpense;
