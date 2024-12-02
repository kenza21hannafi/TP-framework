const express = require ('express');
const app = express();

// middleware de journalisation
//middleware crée avec logger
//const now declare la variable date 
// req.methode que ce soit post ou get 
// obligatoire de mettre next qui la permet de passer au prochain middleware 
const loggerMiddleware = (req,res,next)=>{
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    console.log(`[${date} ${time} ${req.method} ${req.path}]`);
    next();
};

//utiliser le middleware dans l'application 
app.use(loggerMiddleware);

//exemple de route pour tester middleware 
app.get ('/',(req,res)=>{
    res.send('exercice1');
});
//creation d'un 2eme API
app.get('/exercice1',(req,res)=>{
    res.send("une deuxième API");
});
app.listen(3000,()=>{
    console.log("serveur démarré sur le port 3000");
});