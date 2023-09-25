let obj1 = {
    "name" : "yash",
     age : 34,
     address:{
            "city" : "dibrugarh",
            "state" : "Assam"
     },
     "friends":["Ram","Krishna","Hanuman"],

     "garmentSize":{
            "shirt":"M",
            "pant":"W-32",
            "shoes":"UK-9"
     },
}

//console.log(obj1.name);               //o/p -> yash
//console.log(obj1["name"]);            //o/p -> yash

//console.log(obj1.age);                //o/p -> 34
//console.log(obj1["age"]);             //o/p  -> 34

//console.log(obj1.address);                  //o/p -> { city: 'dibrugarh', state: 'Assam' }
//console.log(obj1["address"]);               //o/p -> { city: 'dibrugarh', state: 'Assam' }

//console.log(obj1["address"].city);          //o/p -> dibrugarh
//console.log(obj1["address"]["state"]);      //o/p -> Assam

//console.log(obj1.address.city);             //o/p -> dibrugarh
//console.log(obj1.address["state"]);         //o/p -> Assam

//console.log(obj1.friends[0])                //o/p -> Ram
//console.log(obj1["friends"][0]);            //o/p -> Ram

// for(let key in obj1){
//     console.log(key);                         //prints all keys
//     console.log(obj1[key]);                   //print all values respect to that key  
//}

//obj1.address.city = "Pune";
//console.log(obj1.address);

for(let key in obj1 ){
        console.log(key ," -> ",obj1[key]);
            let innerObj = obj1[key];
            for(let ele in innerObj){
                console.log(ele," -> ",innerObj[ele]);
            }
   // }
}
