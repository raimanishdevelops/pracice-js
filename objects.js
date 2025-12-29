//create a product object
const nikeshoes = {
    id : "201yu@3##",
    nameofshoes : "yakuzaedition",

};
// read  a property - way 1
console.log(nikeshoes.id);

// read  a property - way 2
const copyid =  "id" ; 
console.log(nikeshoes[copyid]);

// update a property
nikeshoes.nameofshoes="adibas";

//add a new property dynamically - is this correct chatgpt?
nikeshoes.time = "10am";

console.log(nikeshoes.time);