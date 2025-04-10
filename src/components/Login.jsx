import { useState } from "react";
import {
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { auth } from "../firebase";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await setPersistence(auth, browserSessionPersistence); // <-- dodane
      await signInWithEmailAndPassword(auth, email, password);
      onLogin();
    } catch (error) {
      alert("Błąd logowania: " + error.message);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Logowanie</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Hasło"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Zaloguj się</button>
    </form>
  );
}

export default Login;
