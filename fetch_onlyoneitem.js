//Log only the data.length

//Fetch products from /api/products
async function get_products() {
    const res = await fetch("https://fakestoreapi.com/products"); //storing response from api to "res"
      
    const data = await res.json(); //stores json to data 
    

    console.log(data.length); // data length ,
    //  here data[0] as the data is and array of objects
    
    
    console.log(res.status); // reading the statusof the response from the api
}

get_products();