var fs=require('fs');
fs.unlink("samnew1.txt",function(err){
    if(err){
        console.log(err);
    }
    console.log("deleted successfully");
})