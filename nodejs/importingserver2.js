const http=require("http");
const server=http.createServer((req,res) => {
    if(req.url == "/"){
        res.end("<h1>Welcome to Home Page</h1><p><a href='/about'>About</a> | <a href='/contact'>Contact</a>");
    }
    else if(req.url == "/about"){
        res.end("<h1>About Page</h1><p>This is the About Page</p><p><a href='/'>Go Back</a></p>");
    }
    else if(req.url == "/contact"){
        res.end("<h1>Contact Page</h1><p>Email: example@example.com</p><p><a href='/'>Go Back</a></p>");
    }
    else{
        res.end("<h1>404 Not Found</h1><p>Page not found</p><p><a href='/'>Go to Home</a></p>");
    }
});
server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});