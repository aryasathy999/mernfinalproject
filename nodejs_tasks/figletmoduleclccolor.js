const figlet=require('figlet');
const clc=require('cli-color');

const name=process.argv[2];
if(!name){
    console.log(clc.red('Please enter a valid name'));
    process.exit(1);
}

figlet(name,(err,data) => {
    if(err){
        console.error(clc.red("Something went wrong"));
        console.dir(err);
        return;
    }
    console.log(clc.green(data));
});