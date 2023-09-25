let str1 = "doubleQuoteString";
let str2 = 'singleQuoteString';
let str3 = `backticksString`;

console.log(str1);
console.log(str2);
console.log(str3);

console.log(str3.charAt(0));    
console.log(str3.charCodeAt(0));    

let subStr = str2.substring(2,6);

let newStr = "I Love My India";
console.log(newStr.split(" "));                     //returns an array [ 'I', 'Love', 'My', 'India' ]

let arrStr = newStr.split(" ");
let joinedStr = arrStr.join("$");                   //joins strings from an array of strings with $ as separator

str1.trim();        //removes extra spaces from start and end of string;