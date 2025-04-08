import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

function ExpenseList() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const q = query(collection(db, "expenses"), orderBy("createdAt", "desc"));
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setExpenses(data);
      } catch (error) {
        console.error("Błąd przy pobieraniu danych:", error);
      }
    };

    fetchExpenses();
  }, []);

  return (
    <div>
      <h2>Lista wydatków</h2>
      {expenses.map((item) => (
        <div key={item.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <p><strong>Kwota:</strong> {item.amount} zł</p>
          <p><strong>Opis:</strong> {item.description}</p>
          <p><strong>Data:</strong> {item.createdAt?.toDate().toLocaleString()}</p>
          {item.receiptUrl && (
            <div>
              <strong>Paragon:</strong><br />
              <img src={item.receiptUrl} alt="Paragon" width="200" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ExpenseList;
