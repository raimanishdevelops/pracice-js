const cars = [
  { model: "maruti-800", color: "red", price: 1000 },
  { model: "marga", color: "blue", price: 1500 }
];

// Access first object's model:
console.log(cars[0].model);  // "maruti-800"

// Change first object's model:
cars[0].model = "tagraCar";
console.log(cars[0].model);  // "tagraCar"
