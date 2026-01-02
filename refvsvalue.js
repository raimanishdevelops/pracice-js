// Modify copied object and observe original

//creating object 

const user  = {
    name : "ranbir" ,
    id : 609
}; 
const original_name = user.name; 
const copy_user = user ;

copy_user.name = "hosanahaha";

console.log(copy_user.name);
console.log(`After change in the copy , the original was>>>>>>>>>> ${original_name} ` + original_name );
console.log(" and after the change in the copy the original has become >>>>>>"+user.name);



