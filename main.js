//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyDi2Ly_NcqJkI1EUaXLrD2PMKeMHbw6hJw",
    authDomain: "kwitter-app-ac5d2.firebaseapp.com",
    databaseURL: "https://kwitter-app-ac5d2-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-ac5d2",
    storageBucket: "kwitter-app-ac5d2.appspot.com",
    messagingSenderId: "113069028778",
    appId: "1:113069028778:web:10d0f7c4579b003c59a7d3"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();