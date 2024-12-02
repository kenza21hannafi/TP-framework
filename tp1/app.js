const express = require('express');
const app = express();
const port =3000;
app.use(express.json());
app.use(express.urlencoded({extend:true}));

let users = [
    {id: 1, name: 'Alice', email:'alice@exemple.com'},
    {id: 2, name: 'Bob', email:'bob@exemple.com'}
];
//creation d'une nouvelle url /users
app.get("/users",(req,res)=>
res.json(users)
);

//get a user by id
//recuperer une information (app.get)
//.find methode qui chercher une valeur dans un tableau
//kol path ken aandou parametre je vais le recuperer et le comparer avec l'id
//send c une  methode de res pour afficher ou renvoyer des données 

app.get('/users/:id',(req,res) =>{
    const user= users.find(u => u.id ===parseInt(req.params.id));
    if (!user) return res.status(404).send('User not found');
    res.json(user);
});
//app.post to post a new user 
app.post('/users',(req,res)=>{
    const newUser = {id: users.length + 1, ...req.body};
    users.push(newUser);
    res.json(newUser);
});
//l'id est auto increment dans ce cas 
//user.push : methode sur les tableaux JS

app.listen(port,() =>{
    console.log(`Application exemple à l'écoute sur le port ${port}`)
});

