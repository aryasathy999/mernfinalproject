const events=require('events');
const emitter=new events.EventEmitter();
emitter.on('order-pizza', function() {
    console.log("Starts preparing pizza");
});
emitter.emit('order-pizza');