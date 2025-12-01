const readline=require('readline');
const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function add(callback){
    rl.question('Enter your name: ', (name) => {
        callback(name);
        rl.close();
    });
}
module.exports={add};