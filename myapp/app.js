const express = require('express');
const app = express();
const port = 3000;
app.get('/',(req,res)=>{
    res.sendStatus('hello world');
});
app.listen(port,()=>{
    console.log(`application sur le port ${port}`)
});