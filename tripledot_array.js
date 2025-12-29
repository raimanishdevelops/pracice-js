const users = {
  name: "jeje",
  id: 123,
  state: "Jharkhand",
  district: "Ranchi",
};

// using ... to
// add users properties to the new "new_users" object

const new_users = {
  ...users,
  name: "gula", //modifying existing data
  title: "grg", //adding new data
};

console.log(users);
console.log(new_users);
