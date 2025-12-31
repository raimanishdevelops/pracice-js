//Calculate total cart price

//creating object cart
const cartValues = [100, 200 , 400] ;
//using .reduce() to add total from a array
const total = cartValues.reduce((acc, n) => acc + n, 0);
console.log(total);