const prompt = require('prompt-sync')();
//console.log("hello");
// var x;
// x = prompt('enter input');  //takes input as string

let num = parseInt(prompt('enter number')); //integer input

function fibo(n){
    if(n == 0 ||n == 1) return n;

    let ans = fibo(n-1) + fibo(n-2);
    return ans;
}

let fibonacci = fibo(num);

console.log(fibonacci);