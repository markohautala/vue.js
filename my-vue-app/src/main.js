import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2-ivyvDenKmKEGkXBfmZjFPSYC-ZvP3A",
  authDomain: "vue-firebase-auth-7c95f.firebaseapp.com",
  projectId: "vue-firebase-auth-7c95f",
  storageBucket: "vue-firebase-auth-7c95f.firebasestorage.app",
  messagingSenderId: "914367416383",
  appId: "1:914367416383:web:cceb179fc4cb0ab05fd08a"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')