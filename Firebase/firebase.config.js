import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.init";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
//firebase init function
const initializeAuthentication = () => {
  initializeApp(firebaseConfig);
};

export default initializeAuthentication;
