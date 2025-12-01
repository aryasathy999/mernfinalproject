function primenumber(n){
    if(n<=1){
        console.log(`${n} is not a prime number`);
        return;
    }
    else{
        let isPrime=true;
        for(let i=2;i<=Math.sqrt(n);i++){
            if(n%i==0){
                isPrime=false;
                break;
            }
        }
        if (isPrime) {
            console.log(`${n} is a prime number`);
        } else {
            console.log(`${n} is not a prime number`);
        }
    }
}
module.exports={
    primenumber
}