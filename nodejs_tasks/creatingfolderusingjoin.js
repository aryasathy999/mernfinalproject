const fs=require('fs');
const path=require('path');
const basePath='C:/Users/aryas/Documents/kgisl/nodejs_tasks';
const folderName='FolderUsingJoin';
const fullPath=path.join(basePath,folderName);
if(!fs.existsSync(fullPath)){
    fs.mkdirSync(fullPath, {recursive: true});
    console.log(`Folder created at ${fullPath}`);
}
else{
    console.log("Folder already exists at:", fullPath);
}