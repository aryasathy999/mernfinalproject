const fs=require('fs');
fs.mkdir('Testfolder', (err) => {
    if(err){
        console.error('Error creating folder:', err);
    }
    else{
        console.log('Folder created successfully!');
    }
});