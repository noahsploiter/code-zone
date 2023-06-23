// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDm-MASZjpGCKJ6Hfcj-gNgg8nc5dzb59Q",
  authDomain: "player-80a43.firebaseapp.com",
  projectId: "player-80a43",
  storageBucket: "player-80a43.appspot.com",
  messagingSenderId: "778918793279",
  appId: "1:778918793279:web:c9757ba98a53916e2ea88a",
  measurementId: "G-9K01V26WL9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
// const analytics = getAnalytics(app);
