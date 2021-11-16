// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMfHd3tdXRJJr1PN0_VtdNJVWVfUwo8YY",
  authDomain: "twitterchatbox.firebaseapp.com",
  databaseURL: "https://twitterchatbox-default-rtdb.firebaseio.com",
  projectId: "twitterchatbox",
  storageBucket: "twitterchatbox.appspot.com",
  messagingSenderId: "635611852456",
  appId: "1:635611852456:web:3622ae07b30f1b64c0dc9d"
};

  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("Username");
    document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

    function addRoom() {
           room_name = document.getElementById("room_name").value;
  
          localStorage.setItem("Roomname",room_name);
      
          window.location = "twitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();