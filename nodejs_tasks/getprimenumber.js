const readline=require('readline');
const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter a number:', (n) => {
    const n1=parseInt(n);
    if(n1<=1){
        console.log(`${n1} is not prime number`);
    }
    else{
        for(let i=2;i<=Math.sqrt(n1);i++){
            if(n1%i==0){
                console.log(`${n1} is not prime number`);
            }
        }
        console.log(`${n1} is prime number`);
    }
    rl.close();
})