//Update array immutably

//making array of numbers randomly
const numbers = [
    1,2,3,4,54,65,98,78,87
];

// updating array immutably
const new_numbers = [
    ...numbers , 45,54,54,54,45,55,44
];

console.log("This is the new numbers array   :" + new_numbers );
console.log("This is the original numbers array    :"+ numbers);

