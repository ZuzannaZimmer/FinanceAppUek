import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import '../style/BudgetSummary.css';


function BudgetSummary({ refreshFlag }) {
  const [limit, setLimit] = useState(() => {
    // pobierz z localStorage przy starcie
    const saved = localStorage.getItem("budgetLimit");
    return saved ? parseFloat(saved) : 500;
  });

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
      const sum = snapshot.docs.reduce(
        (acc, doc) => acc + (doc.data().amount || 0),
        0
      );
      setTotal(sum);
    };

    fetchThisMonthExpenses();
  }, [refreshFlag]);

  const remaining = limit - total;

  const handleLimitChange = (e) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      setLimit(value);
      localStorage.setItem("budgetLimit", value);
    }
  };

  return (
     <div className="budget-summary">
    
      <h2>Podsumowanie budżetu</h2>
      
      <label>
        <strong>Limit miesięczny:</strong>{" "}
        <input
          type="number"
          value={limit}
          onChange={handleLimitChange}
          style={{ width: "80px" }}
        /> zł
      </label>

      <p><strong>Wydano:</strong> {total.toFixed(2)} zł</p>
      <p style={{ color: remaining >= 0 ? "green" : "red" }}>
        <strong>Pozostało:</strong> {remaining.toFixed(2)} zł
      </p>
    </div>
  );
}

export default BudgetSummary;
