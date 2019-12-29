import { firebase } from "@firebase/app";
import "@firebase/firestore";

 // Your web app's Firebase configuration
 const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCIafHYugSod8u4_MoesPH8I0gU0Fv124w",
    authDomain: "jo-site.firebaseapp.com",
    databaseURL: "https://jo-site.firebaseio.com",
    projectId: "jo-site",
    storageBucket: "jo-site.appspot.com",
    messagingSenderId: "500695490494",
    appId: "1:500695490494:web:8e136cdefe4ddb2b59e3ef"
  });
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore()

