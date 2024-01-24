
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
  import {  getDatabase,
    ref,
  set,  } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC0cV_yey3sJzVNOgvn13MxAdgBhgVNEGo",
    authDomain: "temp-c4f4d.firebaseapp.com",
    databaseURL: "https://temp-c4f4d-default-rtdb.firebaseio.com",
    projectId: "temp-c4f4d",
    storageBucket: "temp-c4f4d.appspot.com",
    messagingSenderId: "1024400860148",
    appId: "1:1024400860148:web:6afd4cb4e6eedde49ccfa1",
    measurementId: "G-NDFXH7LXCB"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const database = getDatabase();




window.saveData = function (){
   var name = document.getElementById("name");
   var email = document.getElementById("email");
   var subject = document.getElementById("subject");
   var textarea = document.getElementById("textarea");
   
  
   var obj = {
     username : name.value,
     email : email.value,
     subject : subject.value,
     textarea : textarea.value,
   };
   obj.id = Math.random().toString().slice(2);
   let reference = ref(database, `Client/${obj.id}/`);
   set(reference, obj);
   


   

  


}