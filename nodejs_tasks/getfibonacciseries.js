const readline=require('readline');
const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter a number:', (n) => {
    const n1=parseInt(n);
    let firstterm=0;
    let secondterm=1;
    for(let i=0;i<n1;i++){
        console.log(firstterm);
        let nextterm=firstterm+secondterm;
        firstterm=secondterm;
        secondterm=nextterm;
    }
    rl.close();
})