let arr = ["a" , "Abcde" , 6 , true , 4.56];   //array can support multiple datatypes

console.log(arr);           //print entire array

// for(let i in arr){          //print array using loop
//     console.log(arr[i]);
// }

// for(let i = 0; i < arr.length; i++){    //print array using loop
//     console.log(arr[i]," ");
// }

arr.push(10);       //adds 10 at the end.
arr.unshift(15);    //adds 15 at the start.

console.log(arr);

//arr.shift();        //removes the first element
//arr.pop();          //removes element from the rear

//let partOfArr = arr.slice(2,4); //returns part of array from idx 2(start idx) to idx 4-1(end idx-1);

//arr.splice(2,1);                //removes 1(no of elements) element from 2(start idx) 

let idxOf6 = arr.indexOf(6);         //finds and returns index of element 6

console.log(arr.includes(6));

//for more array function visit -> https://www.w3schools.com/Jsref/jsref_obj_array.asp