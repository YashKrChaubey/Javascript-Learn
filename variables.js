//var , let , const

console.log(x);     //will print undefined.

var x = 15;         //number
console.log(x);

x = "Yash";         //reassigned as string "Yash"
console.log(x);

var x = 2.35;       //redeclared as float 2.35
console.log(x);

//var has global scope
//kahin bhi change karo orginal value change hogi

/*********************************************************************/

//let has local scope or block scope
//console.log(p); //cannot access p before initialisation
let v;  //undefined as no value assigned
console.log(v);

let p = 12345;
console.log(p);

p = "Yash";         //reassignment to string "Yash"
console.log(p);

//let p = 12345;    //redeclaration not allowed

/*********************************************************************/

//we cannot initialise const as undefined ,
//const q;
//q = 76;   not possible

//const must be assigned a value during initialisation 
const q = 35;
console.log(q);

//const variables couldn't be changed once initialised
//q = 67;       not possible