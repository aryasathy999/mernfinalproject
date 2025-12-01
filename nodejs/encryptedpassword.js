const express=require('express');
const bp=require('body-parser');
const crypto=require('crypto');
const app=express();
const port=3000;
app.use(bp.urlencoded({extended:false}))
app.use(bp.json())
const secret="abcdefg"; //Same secret key for HMAC
//Endpoint to verify HMAC
app.post('/verify-hmac', (req,res) => {
    const {message} = req.body;
    //Coppute HMAC fro the received message
    const computedHash = crypto.createHmac("sha256", secret).update(message).digest("hex");
    //Compare with recieved hash;
    return res.json({computedHash});
});
//Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});