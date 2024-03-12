import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBt_mZ2zusLiZ7RJx7vh69raYW7Fe6uoH4",
  authDomain: "timcraftszabist.firebaseapp.com",
  projectId: "timcraftszabist",
  storageBucket: "timcraftszabist.appspot.com",
  messagingSenderId: "782954429419",
  appId: "1:782954429419:web:00f598a26817b3f2e2b7ae",
  measurementId: "G-EXB8BBHFYX"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };
