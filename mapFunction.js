var arr = [{
    name:"harkirat",
    age:21,
},
{
    name:"yash",
    age:17,
},
{
    name:"Rishi",
    age:13,
}];

const arr2 = arr.map((val) => {

    if(val.age >= 18){
        return ({
            name:val.name,
            age:val.age,
            isAllowed:true,
        })
    }
    else{
        return ({
            name:val.name,
            age:val.age,
            isAllowed:false,
        })
    }
});

console.log(arr2);