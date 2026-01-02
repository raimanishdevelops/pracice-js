//use fetch to print json data of users
fetch("/api/users")     // calling api from backend to talk to db for data
  .then(res => res.json())    //chain function, .then passes data to res , which then is converted to json format data  and again saved in res itself
  .then(data => console.log(data)); 

  //same as above using modern way using async and await
  async function getUsers() {
  const res = await fetch("/api/users");   // await Promise<Response>
  const data = await res.json();            // await Promise<JSON>
  console.log(data);
}
