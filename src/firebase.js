import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyD6DSv4YTy3cBx5G40ZmNHZJv0GTKIIWbA",
  authDomain: "netflix-clone-e457c.firebaseapp.com",
  projectId: "netflix-clone-e457c",
  storageBucket: "netflix-clone-e457c.firebasestorage.app",
  messagingSenderId: "178478776153",
  appId: "1:178478776153:web:f63a3bcb6f5754f4a05648"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)


const signup = async (name, email, password)=>{
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
    })
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(' '));
    }
}

const login = async (email, password)=>{
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(' '))
        
    }
}

const logout = () => {
    signOut(auth);
}

export { auth, db, signup, login, logout };