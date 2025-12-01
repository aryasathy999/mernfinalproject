const events=require('events');
const emitter=new events.EventEmitter();
emitter.on('order-pizza', function(size,topping) {
    console.log(`Order placed with size ${size} and topping ${topping}`)
})
emitter.on("order-pizza", (size) => {
    if(size == "large"){
        console.log("Free Drink");
    }
})
emitter.emit("order-pizza","large","chicken")