//function is passed a string 
getUserName("Virat");
function getUserName(user) {
  let username = user;
  console.log(username);
}

getUserName("Dhonish");

//getUserName is a function declaration, 
// so it’s hoisted—you can call it before
//  or after its definition, 
// and each call logs the passed string.