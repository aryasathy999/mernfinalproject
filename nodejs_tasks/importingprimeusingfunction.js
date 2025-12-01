const readline=require('readline');
const {primenumber}=require('./exportingprimeusingfunction');
const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter a number:', (input) => {
    const n=parseInt(input);
    primenumber(n);
    rl.close();
});