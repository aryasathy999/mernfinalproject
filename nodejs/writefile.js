var fs=require('fs')
fs.writeFile("./sam1.txt","Have a nice day new file",function(err){
    if(err){
        console.log(err);
    }
    console.log("Created successfully");
})