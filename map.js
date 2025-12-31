//Convert numbers array to squares using map
const numbers = [1,2,3,4,5];
//Using map i get one element at a time ,
// squaring the numbers and saving in square_of_numbers
const square_of_numbers= numbers.map(n=>n*n);

console.log("Plain printing on console"+square_of_numbers);

console.log("Fancy printing below :");

for (let i = 0; i<=(square_of_numbers.length-1); i++){
    console.log("specail print **********---*****--****---***----:)"+square_of_numbers[i]);
}

//converting object values to square and save in the array
//made object
const exampel_object = {
    name : 102,
    founder : 101,
    money : 100
};
//used Object.values to exract and save the values in an Array
const obj_values = Object.values(exampel_object);

//now using map to go through all the array members
const squareof_obj_values=  obj_values.map((n)=>n*n) ;

console.log(squareof_obj_values);


