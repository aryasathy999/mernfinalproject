function getfactorial(n){
    if(n<0){
        return undefined;
    }
    let fact=1;
    for(let i=1;i<=n;i++){
        fact=fact*i;
    }
    return fact;
}
module.exports={
    getfactorial
}