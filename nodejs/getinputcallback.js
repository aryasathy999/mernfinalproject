const {add}=require('./exportingcallback');
add((name) => {
    console.log(`Your name is: ${name}`);
});