import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";
import BudgetSummary from "./components/BudgetSummary";

function App() {
  return (
    <div>
      <h1>BudżetApp</h1>
      <BudgetSummary limit={500} />
      <AddExpense />
      <hr />
      <ExpenseList />
    </div>
  );
}

export default App;
