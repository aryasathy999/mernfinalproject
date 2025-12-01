const http=require('http');
const server=http.createServer((req,res) => {
    res.write('Have a nice day'); //we can display in end function also
    res.end();
});
server.listen(3000, () => {
    console.log("Server running on http://localhost:3000"); //output shown in this port
});