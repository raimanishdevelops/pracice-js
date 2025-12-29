
//make array of users
const users = ["Manish","Pratik","Arvind","GG"];

//accessing last element simple way
let userlast = users[3];
console.log(userlast);

//accessing last element another way
let users_arraysize = users.length;
console.log(users_arraysize); //printing size of array
console.log(users[users_arraysize-1]);

//makingsize of the array dynamic

users[5]="Abhishek";
console.log(users.length); // output 6
console.log(users[4]); // undefined as it 
// (has not been assigned value)/ undefined.