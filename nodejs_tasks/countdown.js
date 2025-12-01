const readline=require('readline');
const clc=require('cli-color');
const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter starting time:', (input) => {
    let time=parseInt(input);
    if(isNaN(time) || time<=0){
        console.log(clc.red("Please enter a valid positive number."));
        rl.close();
        return;
    }
    const interval=setInterval(() => {
        console.log(clc.yellow(`Time remaining: ${time} seconds`));
        time--;
        if(time<0){
            clearInterval(interval);
            console.log(clc.green("Countdown complete!"));
            rl.close();
        }
    },1000);
});