//wap to break on condition using for() :

const numbers = [1,2,45,8879,454,5,65,12,12,1];
for(let i =0; i<=(numbers.length-1);i++ ){
    if(numbers[i] === 5){
        console.log(numbers[i] + "##############  |||:|||" ); 
        break;
        //conditionally printing when the number is  5 and exiting 
    }
    console.log(numbers[i] + "##############  |||:|||" ); 
}