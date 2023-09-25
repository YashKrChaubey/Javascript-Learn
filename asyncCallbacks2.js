

var count = 0;

function bigCounter(n){
    while(n--){
        count  += 1;
    }

    console.log(count);
}

bigCounter(9000000000000);      //long time taking function to block the thread.

console.log("hello ");

//in case of above synchronous code line by line execution hota h
//jab tak upar wala kaam khtm nhi hoga niche wala nhi chalega
//we call this situation thread block


function printhello(){
    console.log("hello from function");
}

setTimeout(printhello,7000);

console.log("hello from outside");

//the above piece of code is asynchronous since setTimeout is async function.
//pehle hello from outside print hoga
// fir after 7 second hello from function print hoga
//no thread blockage
//thread ne wait nhi kiya jab tak time nhi hua tha tab tak niche waale baaki kaam huye
//jab 7 second ho gya toh function callback hua


//same happens when we are reading something from a file
//jab tak file read nhi hogi ruke rehna is not feasible 
//asynchronously kaam karo aage ka
//jab file read ho jayegi toh execution ho jayega usse related code ka using callback.

//https://latentflip.com/loupe  -> for stimulation

//synchronous functions goes to callStack for line by line execution
//Async functions go to web api section and wait for the task to be done 
//fir they come and wait in the callback queue
//once the recent function is executed they are pushed into the call stack

//callback hell -> chaining of async calls (callbacks)