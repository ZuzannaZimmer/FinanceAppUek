import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

function BudgetSummary({ limit = 500 }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchThisMonthExpenses = async () => {
      const now = new Date();
      const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

      const q = query(
        collection(db, "expenses"),
        where("createdAt", ">=", startOfMonth)
      );

      const snapshot = await getDocs(q);
      const sum = snapshot.docs.reduce((acc, doc) => acc + (doc.data().amount || 0), 0);
      setTotal(sum);
    };

    fetchThisMonthExpenses();
  }, []);

  const remaining = limit - total;

  return (
    <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc" }}>
      <h2>Podsumowanie budżetu</h2>
      <p><strong>Limit miesięczny:</strong> {limit} zł</p>
      <p><strong>Wydano:</strong> {total.toFixed(2)} zł</p>
      <p style={{ color: remaining >= 0 ? "green" : "red" }}>
        <strong>Pozostało:</strong> {remaining.toFixed(2)} zł
      </p>
    </div>
  );
}

export default BudgetSummary;
