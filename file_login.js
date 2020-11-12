function login(){
    user_name = document.getElementById("name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "file_room.html";
}