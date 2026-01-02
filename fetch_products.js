//Fetch products from /api/products
async function get_products() {
    const res = await fetch("https://fakestoreapi.com/products"); //storing response from api to "res"
    const data = await res.json(); //stores json to data 


    console.log(data[0].id); // first product id ,
    //  here data[0] as the data is and array of objects

    

}
get_products();