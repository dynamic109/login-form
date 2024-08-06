import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyDGYu4X4yfiS9rlDqUr7boEYCBCfCPsRFo",
  authDomain: "login-form-10b56.firebaseapp.com",
  projectId: "login-form-10b56",
  storageBucket: "login-form-10b56.appspot.com",
  messagingSenderId: "313669436383",
  appId: "1:313669436383:web:bad25b437452ba03bf7a6a",
  measurementId: "G-QYH5JNNKFB",
};

const app = initializeApp(config);

export const auth = getAuth(app);
export const firestore = getFirestore(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(getAuth(), provider);

export default app;
