// Nowa wersja aplikacji z Bootstrapem i pełną funkcjonalnością

import { useState } from "react";
import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";
import BudgetSummary from "./components/BudgetSummary";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [view, setView] = useState("add");
  const [refreshFlag, setRefreshFlag] = useState(false);

  const triggerRefresh = () => setRefreshFlag((prev) => !prev);

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">BudżetApp</h1>

      {/* Zakładki */}
      <div className="d-flex justify-content-center mb-4 gap-2">
        <button
          className={`btn btn-${view === "add" ? "primary" : "outline-primary"}`}
          onClick={() => setView("add")}
        >
          Dodaj wydatek
        </button>
        <button
          className={`btn btn-${view === "list" ? "primary" : "outline-primary"}`}
          onClick={() => setView("list")}
        >
          Lista wydatków
        </button>
      </div>

      {/* Widok zawartości */}
      <div className="row justify-content-center">
        <div className="col-lg-8">
          {view === "add" && (
            <>
              <div className="card card-body shadow-sm mb-4">
                <BudgetSummary refreshFlag={refreshFlag} />
              </div>
              <div className="card card-body shadow-sm">
                <AddExpense onAdd={triggerRefresh} />
              </div>
            </>
          )}
          {view === "list" && (
            <ExpenseList refreshFlag={refreshFlag} onChange={triggerRefresh} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
