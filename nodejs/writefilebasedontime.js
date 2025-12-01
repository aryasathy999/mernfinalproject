var fs=require('fs');
var word="Hello ";
var times=50;
var textToWrite=Array(times).fill(word).join("");
fs.writeFile('./sam.txt',textToWrite,function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("Text written to file successfully");
    }
});