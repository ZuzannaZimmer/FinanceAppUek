import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { createUserDoc } from "./utils/firebaseUtils";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";
import Login from "./components/Login";
import Register from "./components/Register";
import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";
import BudgetSummary from "./components/BudgetSummary";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [view, setView] = useState("add");
  const [refreshFlag, setRefreshFlag] = useState(false);
  const [user, setUser] = useState(null);
  const [authView, setAuthView] = useState("login");


  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          console.log("Użytkownik zalogowany:", user);
          await createUserDoc(user); // <---- Zapis do kolekcji "users"
          setUser(user);
        } catch (error) {
          console.error("Błąd przy zapisie użytkownika:", error);
        }
      } else {
        console.log("Użytkownik wylogowany");
        setUser(null);
      }
    });
  
    return () => unsub();
  
  }, []);

  const triggerRefresh = () => setRefreshFlag((prev) => !prev);

  if (!user) {
    return (
      <div className="container py-5">
        {authView === "login" ? (
          <Login
            onLogin={() => setUser(auth.currentUser)}
            goToRegister={() => setAuthView("register")}
          />
        ) : (
          <Register
            onRegister={() => setUser(auth.currentUser)}
            goToLogin={() => setAuthView("login")}
          />
        )}
      </div>
    );
  }
  

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">BudżetApp</h1>
      <div className="text-end mb-3">
        <button className="btn btn-outline-danger" onClick={() => signOut(auth)}>
          Wyloguj się
        </button>
      </div>

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
