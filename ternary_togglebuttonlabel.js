//toggle the label of a button

let loginStatus = true;

// see if the  user is logged in or not and toggle the name of the button

const buttonName = loginStatus ? "LogOut"   : "Login"   ;

document.getElementById("labelchange").textContent= buttonName;