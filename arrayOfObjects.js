let arr = [
    {
         id : 1,
        "name" : "yash",
        "address":{ "city":"Dibrugarh" , "state":"Assam"},
        "nationality":"Indian"
    },
    {
         id : 2,
        "name" : "Vaishnav",
        "address":{ "city":"Bidar" , "state":"Maharashtra"},
        "nationality":"Indian"
    },
    {
         id : 3,
        "name" : "Rushikesh",
        "address":{ "city":"Latur" , "state":"Maharashtra"},
        "nationality":"Indian"
    },
    {
        id : 4,
       "name" : "Sujit",
       "address":{ "city":"Itawa" , "state":"U.P"},
       "nationality":"Indian"
   }

];

for(let idx in arr){
    let ele = arr[idx];
    console.log(idx);
    for(let x in ele){
        console.log(x," -> ",ele[x]);
    }
}