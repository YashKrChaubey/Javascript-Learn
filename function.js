const prompt = require('prompt-sync')();

function add(par1,par2){
    return par1 + par2;
}

var sum = add(5,4); //calling and storing to a variable

console.log(sum);

function func2(){
    let rVal = Math.random();
    console.log(rVal);
    return rVal > 0.5 ? true : "false"; //returning boolean / string at the same time
}

console.log(func2());   //calling and printing

