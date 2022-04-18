// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaiOZejokSPJGx_8PNkSDfq9BSAxhwrxQ",
  authDomain: "single-service-provider.firebaseapp.com",
  projectId: "single-service-provider",
  storageBucket: "single-service-provider.appspot.com",
  messagingSenderId: "354269238801",
  appId: "1:354269238801:web:9eb52da5d61d28212143b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;