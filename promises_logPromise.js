async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");   // await Promise<Response>
   console.log(res);
} 
getUsers();