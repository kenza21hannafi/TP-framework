const mongoose = require('mongoose');
const dotenv = require('dotenv');



//ki naamlou creation de base de données il nous demande de créer un cluster
//recuperer l uri mel mongoDB
//async ne vas etre executer ken ki ena naamlelha appel
const uri = process.env.URI_MONGODB ;
const connectDB = async () =>{
    try{
await mongoose.connect(uri)
        .then(()=> console.log("Established a connection to the database"))
        .catch(err => console.log("Something went wrong when connecting to the databade",err));
}catch(error) {
    console.error('Erreur de connexion à mongoDB :',error.message);
    process.exit(1); //arrete le processus si la connexion échoue
}
};
 module.exports = connectDB;