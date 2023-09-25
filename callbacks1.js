function add(num1,num2){
    return num1 + num2;
}

function subtract(num1,num2){
    return num1 - num2;
}

function multiply(num1,num2){
    return num1 * num2;
}

function divide(num1,num2){
    return num1 / num2;
}

function calculate(n1,n2,func){             //declaring function as a parameter to another function
    var result = func(n1 , n2); 
    return result;
}

var ans = calculate(100,15,add);             //function add as an argument
console.log(ans);   //115
var ans = calculate(100,15,subtract);        //function subtract as an argument
console.log(ans);   //85
var ans = calculate(100,15,multiply);        //function multiply as an argument
console.log(ans);   //1500
var ans = calculate(100,15,divide);          //function divide as an argument
console.log(ans);   //6.66666667