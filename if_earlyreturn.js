//Rewrite nested if using early return :
const user ={
    name: "tarun",
    id : 1548
};

//hoisting - calling before defination of function
const userName = getUserName(user);
console.log("username is " + userName);

function getUserName(user) {
  if (!user) return "Guest";   // early return
  return user.name;
}
