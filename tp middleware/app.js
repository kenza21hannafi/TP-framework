const express = require('express');
const app = express();
const port = 3000;
app.get('/',(req,res)=>{
    const date = new Date();
    const formattedDate = data.toLocalString();

    res.send(`<h1> la date et l'heure actuelles sont : ${formattedDate}</h1>`);
});
app.listen(port,()=>{
    console.log(`server running on port ${port}`)
});
