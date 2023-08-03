
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgYsxLZLst074oENjiMB9SSkwu-IYhnc4",
  authDomain: "fiery-airlock-392023.firebaseapp.com",
  projectId: "fiery-airlock-392023",
  storageBucket: "fiery-airlock-392023.appspot.com",
  messagingSenderId: "1007349338630",
  appId: "1:1007349338630:web:b2f49b2c1d5f93f8f02987",
  measurementId: "G-FYTD5D9618"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};