// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtuQHsHFdyVU3HCMw_U9hhbGvTg797RkU",
  authDomain: "travel-app-c53d2.firebaseapp.com",
  projectId: "travel-app-c53d2",
  storageBucket: "travel-app-c53d2.appspot.com",
  messagingSenderId: "440305880358",
  appId: "1:440305880358:web:2def0cce08e836c9d005e7",
  databaseURL:
    "https://travel-app-c53d2-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

// export default { database, storage, auth };
// export default ;
// export default ;
