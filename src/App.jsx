import { useState } from "react";
import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";
import BudgetSummary from "./components/BudgetSummary";
import './styles.css';


function App() {
  const [refreshFlag, setRefreshFlag] = useState(false);

  const triggerRefresh = () => setRefreshFlag(prev => !prev);

  return (
    <main>
    <div>
      <h1>BudżetApp</h1>
      <BudgetSummary refreshFlag={refreshFlag} />
      <AddExpense onAdd={triggerRefresh} />
      <hr />
      <ExpenseList refreshFlag={refreshFlag} onChange={triggerRefresh} />
      </div>
    </main>  
  );
}

export default App;
