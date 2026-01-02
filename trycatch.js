//Wrap async function in try/catch

async function error_handling() {
  try {
    const res = await fetch ("https://jsonplaceholder.typicode.com/users");

      console.log(res.status); // 👈 force visible output

    if(!res.ok){
        throw new Error(`http error : ${res.status}`);
    }
  } catch (error) {
    // Handle network or runtime error
    console.log(error);
  }
}
error_handling();