const readline=require('readline');
const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter a number:', (n) => {
    const n1=parseInt(n);
    let fact=1;
    for(let i=1;i<=n;i++){
        fact=fact*i
    }
    console.log(fact);
    rl.close();
});