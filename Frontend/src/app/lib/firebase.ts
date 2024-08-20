import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBQQiW6iE34pEsYcftltfDv-qNTRzbv_Mc",
  authDomain: "celestia-c3bcc.firebaseapp.com",
  projectId: "celestia-c3bcc",
  storageBucket: "celestia-c3bcc.appspot.com",
  messagingSenderId: "149055401873",
  appId: "1:149055401873:web:912f9080196be84bac3430",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
