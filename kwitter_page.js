user_name = localStorage.getItem("username");
room_name = localStorage.getItem("roomname");
function send()
{
    msg = document.getElementById("msg").value;
    firebaseConfig.databaseURL().ref(room_name).push({
        name : user_name,
        message : msg,
        like : 0
    });
    document.getElementById("msg").value = "";
    
}