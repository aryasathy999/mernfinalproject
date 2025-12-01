const readline=require('readline');
const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter a number:', (n) => {
    const n1=parseInt(n);
    let originalnumber=n1;
    let reversed=0;
    if(n1<0){
        console.log(`${n1} is not palindrome number`);
    }
    else{
        let temp=n1;
        while(temp>0){
            let digit = temp % 10;
            reversed = reversed * 10 + digit;
            temp = Math.floor(temp / 10);
        }
        if (originalnumber === reversed) {
            console.log(`${n1} is a palindrome number`);
        } else {
            console.log(`${n1} is not a palindrome number`);
        }
    }
    rl.close();
});