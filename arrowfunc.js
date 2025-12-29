const getUserName = (user) => {
  return user.name;
};

// Example data (API / state / DB response)
const user = {
  id: 101,
  name: "Manish",
  role: "Frontend Developer",
};

// Usage
const userName = getUserName(user);
console.log(userName); // Manish
//Rule (production 2024–2025):
// Use const by default; use let only when
//  reassignment is required 
// (loops, counters, state updates).