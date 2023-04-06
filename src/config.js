// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCPAK65kYMVZFLQeuaY3_RitmwaGLBC58g",
//   authDomain: "feefi-97328.firebaseapp.com",
//   projectId: "feefi-97328",
//   storageBucket: "feefi-97328.appspot.com",
//   messagingSenderId: "726675273125",
//   appId: "1:726675273125:web:26a85326c01a1e3c69244c",
//   measurementId: "G-T5R85Y36MN",
//   databaseURL:"https://feefi-97328-default-rtdb.firebaseio.com/"
  
// };
const firebaseConfig = {
  apiKey: "AIzaSyAx1av0Qz7hOpNLKNZgveWaprjSib_tFrY",
  authDomain: "feefi-465cf.firebaseapp.com",
  projectId: "feefi-465cf",
  storageBucket: "feefi-465cf.appspot.com",
  messagingSenderId: "253107087965",
  appId: "1:253107087965:web:c180d6a357cd318cdcfbb4",
  measurementId: "G-3GNN031R7X",
  databaseURL:"https://feefi-465cf-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//intialize the firebase auth function here 
export const auth = getAuth(app);
export const database=getDatabase(app)
export const db = getFirestore(app);