// use .filter() to get only selective items
const users = [
  {
    name: "matt",
    numbermobile: 8547585965,
    age: 18,
  },
  {
    name: "rudra",
    numbermobile: 8547777777,
    age: 26,
  },
  {
    name: "kia",
    numbermobile: 3435465567,
    age: 10,
  },
];

const filtered_above18_users = users.filter(
  ({ age: userAge }) => userAge >= 18
);

console.log(filtered_above18_users);