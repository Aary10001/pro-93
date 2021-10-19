var firebaseConfig = {
      apiKey: "AIzaSyCQ_KIhUGvGz7mupgQ8fdDaw33UfYbxu_8",
      authDomain: "kwitter1-98e1b.firebaseapp.com",
      databaseURL: "https://kwitter1-98e1b-default-rtdb.firebaseio.com",
      projectId: "kwitter1-98e1b",
      storageBucket: "kwitter1-98e1b.appspot.com",
      messagingSenderId: "928843498101",
      appId: "1:928843498101:web:f3b36581da470b2bbaee3c"
    };
    
    // Initialize Firebase
//ADD YOUR FIREBASE LINKS HERE
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
