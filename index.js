// Importe dépendances
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/sequelize');

sequelize.authenticate()
  .then(() => console.log('Connexion à la base de données établie avec succès.'))
  .catch(err => console.error('Impossible de se connecter à la base de données:', err));



const UsersRoutes = require('./Routes/UsersRoutes');
const ArticlesRoutes = require('./Routes/articlesRoute');
const CategoryRoutes = require('./Routes/categoryRoutes');
const ContentRoutes = require('./Routes/contentRoutes');
const CommentsRoutes = require('./Routes/commentsRoutes');

// Créer instance de l'application Express
const app = express();

// Définir le port
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/Hello', (request, result) => {
    result.send('hello world');
});

app.use('/Users', UsersRoutes);
app.use('/Articles', ArticlesRoutes);
app.use('/Category', CategoryRoutes);
app.use('/Content', ContentRoutes);
app.use('/Comments', CommentsRoutes);

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Votre serveur est lancé sur http://localhost:${port}`);
});
