const events=require('events');
const emitter=new events.EventEmitter();
emitter.on('book-ticket', function(name,seatType,noOfTickets){
    console.log(`seat booked for ${name} in a seat of type ${seatType} with a tickets of ${noOfTickets}`)
})
emitter.on('book-ticket', (seatType,noOfTickets) => {
    if(seatType === 'VIP'){
        console.log("Free drink");
        if(noOfTickets > 2){
            console.log("Popcorn Offer");
        }
    }
});
emitter.emit('book-ticket','Arya','VIP',6);