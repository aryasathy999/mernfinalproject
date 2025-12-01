const fs=require('fs');
const path=require('path');
const basePath='C:/Users/aryas/Documents/kgisl/nodejs_tasks';
const folderName='folder1';
const fileName='file1.txt';
const fileContent='This is some sample content written to the file';
const folderPath=path.join(basePath,folderName);
const filePath=path.join(folderPath,fileName);
if(!fs.existsSync(folderPath)){
    fs.mkdirSync(folderPath, {recursive:true});
    console.log('Folder created at:', folderPath);
}
else{
    console.log('Folder already exists at:', folderPath);
}
fs.writeFileSync(filePath,fileContent);
console.log(`File created at ${filePath} with content`);