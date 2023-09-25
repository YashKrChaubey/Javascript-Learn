var str = "I love my india" ;

var arrOfStrings = str.split(" ");          //splits by each " " returns an array of strings

console.log(arrOfStrings);                  //[ 'I', 'love', 'my', 'india' ]

var str2 = "abcdefghijklmnopqrstuvwxyz";

var arrOfCharacters = str2.split("");       //splits by each character returns an array of characters/strings

console.log(arrOfCharacters);               //['a', 'b', 'c', 'd', 'e', 'f','g', 'h', 'i', 'j', 'k', 'l','m', 'n', 'o', 'p', 'q', 'r','s', 't', 'u', 'v', 'w', 'x','y', 'z']

var newStr1 = arrOfCharacters.join("");     //merges all characters inti a single string and returns
var newStr2 = arrOfStrings.join(" ");       //merges arrof strings with space into a sentence string

console.log(newStr1);                       //abcdefghijklmnopqrstuvwxyz

console.log(newStr2);                       //I love my india