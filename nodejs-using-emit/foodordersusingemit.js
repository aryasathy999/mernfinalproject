const events=require('events');
const emitter=new events.EventEmitter();
emitter.on('place-order', (item,quantity,extras) => {
    console.log(`Order placed for ${item} with quantity of ${quantity} and ${extras}`)
})
    emitter.on('place-order', (item,quantity) => {
        if(item === "Burger"){
            console.log("free fries");
            if(quantity > 3){
                let discount=500*(5/100);
                console.log(`Disount Applied:${discount}`);
            }
        }
    });
emitter.emit('place-order','Burger',5,"chilly");
