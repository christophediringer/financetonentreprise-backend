// Importe dépendances
const express = require('express');

const UsersRoutes = require('./Routes/UsersRoutes');

// Créer instance de l'application Express
const app = express();

// Définir le port. 3003 
const port = 3003;


// 5 tyoes de requettes possible GET POST PATCH DELETE PUT
// Premier parametre est la route pour acceder aux données
//  Deusième parametre est la fonction fléché qui va faire le traitement, prend toujours 2 paramettre (request et result)

app.get ('/Hello', (request, result) => {
    // envoi les données à l'utilisateur
    result.send('hello word')
})

app.use('/Users', UsersRoutes);



// Premier paramettre port sur lequel le serveur va ecouter
// Deuxième paramettre une fonction fléché qui est faite au lancement du serveur
app.listen(port, () => {
    console.log("Votre serveur est lancé sur http://127.0.0.1:"+port)
})
