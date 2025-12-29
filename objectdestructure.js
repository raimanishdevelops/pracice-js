//Wap destucture an object with 3 fields

//make object named mobile

const mobile = {
    name : 'motorola',
    model_num : 123456,
    model_color : 'red'
};

//destructure to get the model_num and color
const{model_num , model_color}=mobile; // now we can use 
// the variables  model_num and model_color anywhere in the file
console.log(model_num); 