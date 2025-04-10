import { useEffect, useState } from "react";
import { db } from "../firebase";
import { auth } from "../firebase";
import '../style/ExpenseList.css';

import {
  collection,
  getDocs,
  query,
  orderBy,
  where,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

function ExpenseList({ refreshFlag, onChange  }) {
  const [expenses, setExpenses] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  

  const fetchExpenses = async () => {
    try {
      const user = auth.currentUser;
      if (!user) return;
  
      let q = query(
        collection(db, "expenses"),
        where("uid", "==", user.uid),
        orderBy("createdAt", "desc")
      );
  
      if (startDate) {
        q = query(q, where("createdAt", ">=", new Date(startDate)));
      }
      if (endDate) {
        const nextDay = new Date(endDate);
        nextDay.setDate(nextDay.getDate() + 1);
        q = query(q, where("createdAt", "<", nextDay));
      }
  
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setExpenses(data);
    } catch (error) {
      console.error("Błąd przy pobieraniu danych:", error);
    }
  };
  

  useEffect(() => {
    fetchExpenses();
  }, [refreshFlag, startDate, endDate]);

  return (
    <div>
      <h2>Lista wydatków</h2>

      <div style={{ marginBottom: "1rem" }}>
        <label>
          Od:{" "}
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </label>
        <label style={{ marginLeft: "1rem" }}>
          Do:{" "}
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </label>
      </div>

      {expenses.map((item) => (
        <ExpenseItem key={item.id} item={item} refresh={fetchExpenses} onChange={onChange} />
        
      ))}
      
    </div>
  );
}

function ExpenseItem({ item, refresh, onChange  }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newDesc, setNewDesc] = useState(item.description);
  const [newAmount, setNewAmount] = useState(item.amount);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const handleSave = async () => {
    try {
      const ref = doc(db, "expenses", item.id);
      await updateDoc(ref, {
        description: newDesc,
        amount: parseFloat(newAmount),
      });
      setIsEditing(false);
      refresh();
    } catch (error) {
      console.error("Błąd przy edycji:", error);
    }
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Na pewno chcesz usunąć ten wydatek?");
    if (!confirmDelete) return;

    try {
      const ref = doc(db, "expenses", item.id);
      await deleteDoc(ref);
      refresh();
      if (onChange) onChange();
    } catch (error) {
      console.error("Błąd przy usuwaniu:", error);
    }
  };

  return (
    <div key={item.id} className="expense-card">
      {isEditing ? (
        <>
          <input
            type="text"
            value={newDesc}
            onChange={(e) => setNewDesc(e.target.value)}
          />
          <input
            type="number"
            value={newAmount}
            onChange={(e) => setNewAmount(e.target.value)}
          />
          <button onClick={handleSave}>Zapisz</button>
        </>
      ) : (
        <>
          <p><strong>Kwota:</strong> {item.amount} zł</p>
          <p><strong>Opis:</strong> {item.description}</p>
          <p><strong>Kategoria:</strong> {item.category}</p>
          <p><strong>Data:</strong> {item.createdAt?.toDate().toLocaleString()}</p>
          {item.receiptUrl && (
            <div>
            <strong>Paragon:</strong><br />
            <img
              src={item.receiptUrl}
              alt="Paragon"
              width="200"
              onClick={() => setFullscreenImage(item.receiptUrl)}
              style={{ cursor: 'pointer' }}
            />
          </div>
          )}
          {item.location && (
            <p>
              🌍{" "}
              <a
                href={`https://www.google.com/maps?q=${item.location.lat},${item.location.lng}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Zobacz na mapie
              </a>
            </p>
          )}

          <button className="edit" onClick={() => setIsEditing(true)}>Edytuj</button>
          <button className="delete" onClick={handleDelete} style={{ marginLeft: "10px", color: "white" }}>
            Usuń
          </button>
        </>
      )}
      {fullscreenImage && (
        <div className="fullscreen-overlay" onClick={() => setFullscreenImage(null)}>
          <img src={fullscreenImage} alt="Powiększony paragon" />
        </div>
      )}
    </div>
    
  );
}

export default ExpenseList;