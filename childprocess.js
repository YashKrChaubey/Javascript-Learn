let cp = require("child_process");

// console.log("trying to open calculator");
// cp.execSync("calc");        //opened calculator with synchronous function execSync
// console.log("opened calculator");


//console.log("opening youtbe in chrome");
//cp.execSync("start chrome https:\\www.youtube.com");    //opened youtube in chrome with synchronous function execSync

console.log("execute any code file .py , .cpp , .js etc");

let output = cp.execSync("node arrays.js");

console.log(output);
 