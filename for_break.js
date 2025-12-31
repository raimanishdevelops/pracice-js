//wap to break on condition using .map()

const numbers = [1,2,45,8879,454,5,65,12,12,1];

const selected_numbers = numbers.map(n=> {
    if(n=== 5){
        console.log( "Dont print this 5  please ##############  |||:|||" ); 
        //break; not allowed
        //tried to conditionally printing when the number is  5 
        // and exiting BUT break not allowed inside chaining functions 
    }
    console.log(n + "##############  |||:|||" ); 
}
);


// :)   break; is NOT allowed inside .map(), .forEach(),
//  .filter(), or any other array chaining method callbacks.