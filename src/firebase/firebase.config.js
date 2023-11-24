
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC0KF4NrDXRxMo2ozVMsWNWmkSXMRtZx3E",
  authDomain: "shaha-islamic-center.firebaseapp.com",
  projectId: "shaha-islamic-center",
  storageBucket: "shaha-islamic-center.appspot.com",
  messagingSenderId: "1009279158023",
  appId: "1:1009279158023:web:f6e89b63a92533db14e7a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;