var fs=require('fs')
fs.readFile("./sam.txt","utf-8",function(err,data){
    if(err){
        console.log(err);
    }
    console.log(data);
})