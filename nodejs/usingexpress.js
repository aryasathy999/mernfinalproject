const express = require('express');
const app = express();
const port = 3000;
// Homepage with links
app.get("/", (req, res) => {
    res.send(`
        <h1>Welcome to My Website</h1>
        <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    `);
});
// About Page
app.get("/about", (req, res) => {
    res.send("<h1>About Us</h1><p>This is the About page.</p><a href='/'>Go Back</a>");
});
// Services Page
app.get("/services", (req, res) => {
    res.send("<h1>Our Services</h1><p>We offer great services.</p><a href='/'>Go Back</a>");
});
// Contact Page
app.get("/contact", (req, res) => {
    res.send("<h1>Contact Us</h1><p>Email: contact@example.com</p><a href='/'>Go Back</a>");
});
// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
