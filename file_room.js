
      input_value_username = localStorage.getItem(user_name);
      
      document.getElementById("welcome").innerHTML = "Welcome" + input_value_username + "! ";

      var firebaseConfig = {
      apiKey: "AIzaSyAjwl05RyPYpgMSGdojnvbJRrKXueLvtes",
      authDomain: "letschat-403db.firebaseapp.com",
      databaseURL: "https://letschat-403db.firebaseio.com",
      projectId: "letschat-403db",
      storageBucket: "letschat-403db.appspot.com",
      messagingSenderId: "259876873045",
      appId: "1:259876873045:web:889d92cc3cbc81b4f045dc",
      measurementId: "G-7Q8X06NF7C"
    };

    // Initialize Firebase

    firebase.initializeApp(firebaseConfig);

      function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

      //Start code

      

      //End code

      });});}
      getData();
