const readline=require('readline');
const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter a number:', (n) => {
    const n1=parseInt(n);
    let sum=0;
    for(let i=1;i<=n1;i++){
        sum=sum+i;
    }
    console.log(sum);
    rl.close();
})