import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; 
import { getFirestore} from "firebase/firestore";

// Config
const firebaseConfig = {
  apiKey: "AIzaSyB8BM-mFrr5J0xV0pb51cc9exnLbusEKKM",
  authDomain: "test-d39d4.firebaseapp.com",
  databaseURL: "https://test-d39d4-default-rtdb.firebaseio.com",
  projectId: "test-d39d4",
  storageBucket: "test-d39d4.appspot.com",
  messagingSenderId: "293211952949",
  appId: "1:293211952949:web:46182ed19420fc5b851e7c",
  measurementId: "G-12ML0YMTV8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
const db = getFirestore(app);