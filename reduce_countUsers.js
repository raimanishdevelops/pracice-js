const users = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 3, name: "C" }
];

const userCount = users.reduce(acc => acc + 1, 0);

console.log(userCount); // 3
