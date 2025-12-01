const fs=require('fs');
const path=require('path');
const filePath="C:/Users/aryas/Documents/kgisl/nodejs_tasks/sample.txt";
const fileName=path.basename(filePath);
console.log('Extracted filename:', fileName);
fs.unlink((filePath), (err) => {
    if(err){
        console.error('Error deleting file:', err.message);
    }
    else{
        console.log(`File ${fileName} deleted successfully`);
    }
})