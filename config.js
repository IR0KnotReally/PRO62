 import * as firebase from "firebase";

 var firebaseConfig = {
    apiKey: "AIzaSyAIqPw5Qf50UsgdOCPf-yd4C87WRQ-Ve4Q",
    authDomain: "proc60-2608e.firebaseapp.com",
    projectId: "proc60-2608e",
    storageBucket: "proc60-2608e.appspot.com",
    messagingSenderId: "545656986984",
    appId: "1:545656986984:web:6d6363a58707d39e998add"
  };

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
 

console.log(firebase.name);
console.log(firebase.database());
 
 

  