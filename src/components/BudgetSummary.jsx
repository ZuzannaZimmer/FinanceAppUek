import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import '../style/BudgetSummary.css';
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth } from "../firebase"; 



function BudgetSummary({ refreshFlag }) {
  const [limit, setLimit] = useState(500); // domyślnie 500, potem pobierz z Firestore


  const [total, setTotal] = useState(0);
  const saveBudgetLimit = async (newLimit) => {
    const user = auth.currentUser;
    if (!user) return;
  
    const now = new Date();
    const month = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
  
    await setDoc(doc(db, "budgetLimits", `${user.uid}_${month}`), {
      uid: user.uid,
      month,
      limit: newLimit,
      updatedAt: new Date()
    });
  };
  
  
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
  useEffect(() => {
    const fetchBudgetLimit = async () => {
      const user = auth.currentUser;
      if (!user) return;
  
      const now = new Date();
      const month = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
  
      const docRef = doc(db, "budgetLimits", `${user.uid}_${month}`);
      const snapshot = await getDoc(docRef);
  
      if (snapshot.exists()) {
        const data = snapshot.data();
        setLimit(data.limit || 500);
      }
    };
  
    fetchBudgetLimit();
  }, []);
  

  const remaining = limit - total;

  const handleLimitChange = async (e) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      setLimit(value);
      localStorage.setItem("budgetLimit", value);
      await saveBudgetLimit(value); // <--- zapis do Firestore
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
