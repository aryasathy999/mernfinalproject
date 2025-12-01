const readline=require('readline');
const {getfactorial}=require('./exportingfactorialusingfunction'); //importing function
const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter a number:', (input) => {
    const n=parseInt(input);
    if(isNaN(n)){
        console.log(`${n} is not a number`);
    }
    else{
        const result=getfactorial(n);
        if (result !== undefined) {
            console.log(`Factorial of ${n} is ${result}`);
        } else {
            console.log("Factorial is not defined for negative numbers.");
        }
    }
    rl.close();
});