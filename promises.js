function bringWater(litres){
    var answer = new Promise(function(resolve,reject){
        if(litres < 3){
            console.log("resolving");
            setTimeout(resolve,5000);
        }
        else{
            console.log("rejecting");
            setTimeout(reject,5000);
        }
    });

    return answer;
}


bringWater(2).then(function(){
    console.log("promise resolved");
});

bringWater(5).catch(function(){
    console.log("promise rejected");
});

bringWater(1).finally(() => {
    console.log("kaam khatam");     //work in both case 
})