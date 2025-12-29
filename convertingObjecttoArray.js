const users ={
    name : "Manish",
    title : "Rai",
    phone_number : 8210480745,
    status : true
};

//saving/converting object key,value or entries to array

//object's value to arrray
const valueof_users=Object.values(users);
console.log(valueof_users);

//object's key to array
const keyof_users=Object.keys(users);
console.log(keyof_users);

//object's entries - both key and pair 
const key_value_pair_users=Object.entries(users);
console.log(key_value_pair_users);

// lets say i want the key-value pair printed from "key_value_naya_users" 
// WAP
for(let i =0; i<2;i++){
    console.log(valueof_users[i]);
    console.log(users[i]);  // wont show as it is object not array - undefined
    console.log(keyof_users[i]);
    console.log("key value pair " + i+"  " +key_value_pair_users[i]);
}

//extracting one value from array of array
const [ky,val] = key_value_pair_users[3];
console.log("key =  " + ky  + "and value = " + val); 

//for reading all the values

const lengthOfPairs = key_value_pair_users.length;

for(let i=0; i<=lengthOfPairs-1;i++){
    let response = key_value_pair_users[i] ;
    let[keys,values] = response;
    console.log("key is "+keys + "and the value is  " + values);
}