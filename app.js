//  this is a function incremnting a variable , let count 
function printcount(){
    let count=1;
    count++;
    console.log(count);

}
printcount();


// wap const , let
// assigned baseurl as a connstant , i.e final as in java
const BASE_URL="www.basecase.com";

//assign a variable and increase the value
let count=0;
count = count + 2;

// reassigning a constant to see ERROR!!!
function reassignBaseUrl(){

const BASE_URL="www.fb.com";
BASE_URL="1000";

}

reassignBaseUrl();

