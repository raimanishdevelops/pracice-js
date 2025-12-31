const cars = [
  { model: "maruti-800", color: "red", price: 1000 },
  { model: "marga", color: "blue", price: 1500 }
];
const extracted_carsname = cars.map(({model})=> model);
// above ".map()" is used to sedn elements one by one and 
// ".map()" also return the array at the end
// secondly  {model} is object destructuring 
console.log(extracted_carsname);