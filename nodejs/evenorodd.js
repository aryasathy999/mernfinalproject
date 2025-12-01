const readline=require('readline');
const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter a number: ', (n) => {
    const n1=parseInt(n);
    if(n1%2==0){
        console.log(`${n1} is even!`);
    }
    else{
        console.log(`${n1} is odd!`);
    }
    rl.close();
})