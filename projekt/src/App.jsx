import { useState } from "react";
import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";
import BudgetSummary from "./components/BudgetSummary";

function App() {
  const [refreshFlag, setRefreshFlag] = useState(false);

  const triggerRefresh = () => setRefreshFlag(prev => !prev);

  return (
    <div>
      <h1>BudżetApp</h1>
      <BudgetSummary refreshFlag={refreshFlag} />
      <AddExpense onAdd={triggerRefresh} />
      <hr />
      <ExpenseList refreshFlag={refreshFlag} onChange={triggerRefresh} />
      </div>
  );
}

export default App;
