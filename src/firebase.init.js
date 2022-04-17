// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyD5Q0s5irXSSo4lZ1YFXiW9QA6q6GoGbIk",
   authDomain: "cshutter-e426c.firebaseapp.com",
   projectId: "cshutter-e426c",
   storageBucket: "cshutter-e426c.appspot.com",
   messagingSenderId: "236482648934",
   appId: "1:236482648934:web:d8e55bd7b4bc4095f406a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;