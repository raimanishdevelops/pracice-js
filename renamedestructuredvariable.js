// WAP to rename desturcted variable

const user = { name: "Manish", age: 25 };

// rename `name` → `userName` while destructuring/copying the needful properties
const { name: userName, age } = user;

console.log(userName); // "Manish"  
// , since now the "name" is change to "userName" we can call it by using "userName"