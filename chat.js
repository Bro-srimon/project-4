var firebaseConfig = {
    apiKey: "AIzaSyAR8TYm95w2m5PoZmeSvVpkskyXIxr2W6g",
    authDomain: "project-letschat-89dde.firebaseapp.com",
    databaseURL: "https://project-letschat-89dde-default-rtdb.firebaseio.com",
    projectId: "project-letschat-89dde",
    storageBucket: "project-letschat-89dde.appspot.com",
    messagingSenderId: "329523667475",
    appId: "1:329523667475:web:85d9d5bf2d5afc898155e6",
    measurementId: "G-GRN17JH1N4"
  };

firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });

    localStorage.setItem("user_name", user_name);
    window.location = "chat_room.html";
}