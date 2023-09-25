//datatypes in JS are
    //numbers - 1 , 2 , 4.5 , 7 , 8;
    //string  - x' , "xyz5r6f5";
    //null    - var x = null;
    //boolean - true = 1, false = 0
    //undefined
    //Objects

x = "a" ;

// console.log(x+x);       // string + string -> string (concatenates)
// console.log(x-'3');    // string(num) - string(num)  -> number (-45)
// console.log(x*'3');    // string(num) * string(num)  -> number (-45)
// console.log(x/'3');    // string(num) / string(num)  -> number (-45)


// console.log(x+1);       // string + number -> string (concatenates)
// console.log(x-1);       // string(num) - number -> number (8)
// console.log(x*1);       // string(num) * number -> number (9)
// console.log(x/1);       // string(num) / number -> number (9)


//console.log(typeof(x));

//objects
let obj1  = {
    //properties -> data members
    name:"yash", 
    age:54,
    //methods -> member functions
    isAdult: function (age){
                return age > 18 ? true : false;
             } ,
};

//2 ways of accessing (GET)
console.log(obj1.age);      //54
console.log(obj1["age"]);   //54

obj1.age = 40;      //(SET) or update value
console.log(obj1.age);

//object inside object
let obj2 = {
    name : "Steve Rogers",
    age : 45,
    address : {              //new object address inside obj2
        city : "Dibrugarh",
        state : "Assam"
    },
    movies : ["captain America first avenger" , "captain america winter soldier" , "captain america civil war"],
    sayHi : function(){
        console.log("hi");
    }
};

obj2.friends = ["tony","Hulk","Natasha"];   //creates the key value pair

//console.log(obj2);              //prints entire object

// for(let key in obj2){             //prints entire object using for-each loop
//     console.log(key ," : ", obj2[key]);
// }

// console.log(obj2.movies);       //  entire movies array
// console.log(obj2.movies[1]);    //  movie name at index 1

// console.log(obj2.address);          //entire address object
// console.log(obj2.address.city);     //city name from the address object
// console.log(obj2.address["city"]);  //city name from the address object

// obj2.sayHi();

//console.log(obj2.xyz);      //undefined as key xyz is not present