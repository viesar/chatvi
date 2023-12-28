var firebaseConfig = {
    apiKey: "AIzaSyBNsFnyw-_Bk5ZF0iJMKuQbQrocZbToSvk",
    authDomain: "chatvi-42af4.firebaseapp.com",
    databaseURL: "https://chatvi-42af4-default-rtdb.firebaseio.com",
    projectId: "chatvi-42af4",
    storageBucket: "chatvi-42af4.appspot.com",
    messagingSenderId: "756563832590",
    appId: "1:756563832590:web:ec6c53a57147e65683b15f",
    measurementId: "G-8Y4NGDBBT6"
  };
  
  
    firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }
  