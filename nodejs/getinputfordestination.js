const fs=require('fs');
//Source file
const sourceFile='sam.txt';
//Destination file
const destFile='destination.txt';
//Read the source file
fs.readFile(sourceFile,'utf-8', (err,data) => {
    if(err){
        console.log(err);
        return;
    }
    //Write data to the destination file
    fs.writeFile(destFile,data,(err) => {
        if(err){
            console.log(err);
            return;
        }
        console.log('Content copied successfully');
    });
});