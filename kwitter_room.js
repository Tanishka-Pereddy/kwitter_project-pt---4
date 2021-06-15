var firebaseConfig = {
    apiKey: "AIzaSyDQmj3ctwfdgBUn8h6ERxE8NK58vybEzeM",
    authDomain: "kwiter-82ec3.firebaseapp.com",
    databaseURL: "https://kwiter-82ec3-default-rtdb.firebaseio.com",
    projectId: "kwiter-82ec3",
    storageBucket: "kwiter-82ec3.appspot.com",
    messagingSenderId: "58426848095",
    appId: "1:58426848095:web:fbd17cd74130bfbcd9fcea",
};
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");

function addRoom() {
    room_name = document.getElementById("room_name").value;
    localStorage.setItem("room_name", room_name);
    window.location = ""
}

function getData() {
    firebase.database().ref("/").on('value',
        function (snapshot) {
            document.getElementById("output").innerHTML =
                "";
            snapshot.forEach(function (childSnapshot) {
                childKey =
                    childSnapshot.key;
                Room_names = childKey;
                //Start code
                console.log("roomname-"+Room_name);
                row = "<div class='room_name' id = " +Room_names+"onclick =  'redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
                document.getElementById("output").innerHTML += row;
                //End code
            });
        });
}
getData();