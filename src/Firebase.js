// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyAUwcv90QoQSbzUzS7Wp_QSxuaNJ08BftI",
//   authDomain: "amzn2-7f8b1.firebaseapp.com",
//   projectId: "amzn2-7f8b1",
//   storageBucket: "amzn2-7f8b1.appspot.com",
//   messagingSenderId: "651627062839",
//   appId: "1:651627062839:web:59bb367adea786511281b2",
// };

// // Initialize Firebase
// //  export const app = initializeApp(firebaseConfig);





import { initializeApp } from "firebase/app";
import { getFirestore, Timestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAUwcv90QoQSbzUzS7Wp_QSxuaNJ08BftI",
  authDomain: "amzn2-7f8b1.firebaseapp.com",
  projectId: "amzn2-7f8b1",
  storageBucket: "amzn2-7f8b1.appspot.com",
  messagingSenderId: "651627062839",
  appId: "1:651627062839:web:59bb367adea786511281b2",
};

//init firebase app through configs
initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);

//declare db which gets Firestore
const db = getFirestore();

//declare auth which gets the AUTH
const auth = getAuth();

//use timestamp
const timestamp = Timestamp;
// export db, auth & timestamp to use in app
export { db, auth, app, timestamp };


