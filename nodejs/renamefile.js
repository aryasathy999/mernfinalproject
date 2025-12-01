var fs=require('fs');
fs.rename("sam1.txt","samnew1.txt",function(err){
    if(err){
        console.log(err);
    }
    console.log("renamed successfully");
})