import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

export const createUserDoc = async (user) => {
    if (!user) return;
  
    console.log("ZAPISUJĘ UŻYTKOWNIKA DO FIRESTORE:", user); // <-- dodaj to
  
    const userRef = doc(db, "users", user.uid);
  
    await setDoc(userRef, {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName || "",
      createdAt: new Date(),
    });
  };
  
