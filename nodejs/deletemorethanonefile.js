var fs=require('fs');
var filesToDelete=["./sam.txt","./destination.txt"];
filesToDelete.forEach(function(file){
    fs.unlink(file,function(err){
        if(err){
            console.log(err);
        }
        else{
            console.log(`${file} added successfully`);
        }
    });
});