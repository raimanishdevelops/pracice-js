const cars = [
  { model: "maruti-800", color: "red", price: 1000 },
  { model: "marga", color: "blue", price: 1500 }
];

const carsHTML = cars.map(({ model, color }) => `
  <div class="car">
    <h2>Model:   ${model}</h2>
    <p>Color: ${color}</p>
  </div>
`).join(""); // IMPORTANT method chaining , therefore after .map() has 
// worked with all its members , then the result is
//  given to .join("") to join all the strings together

document.getElementById("root").innerHTML = carsHTML;
// console.log(carsHTML);