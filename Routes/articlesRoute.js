const express = require('express');
const ArticlesController = require('../Controllers/ArticlesController');
const AuthenticateController = require('../Controllers/authenticateController');

const router = express.Router();

// Routes publiques
router.get('/', ArticlesController.getAllArticles);
router.get('/:id', ArticlesController.getArticleById);

// Routes protégées
router.post('/', AuthenticateController.authenticateToken, AuthenticateController.checkPermission(['super_admin', 'courtier_admin', 'courtier']), ArticlesController.createArticle);
router.put('/:id', AuthenticateController.authenticateToken, AuthenticateController.checkPermission(['super_admin', 'courtier_admin', 'courtier']), ArticlesController.updateArticle);
router.delete('/:id', AuthenticateController.authenticateToken, AuthenticateController.checkPermission(['super_admin', 'courtier_admin']), ArticlesController.deleteArticle);

// Routes pour les commentaires
// Tout le monde peut ajouter un commentaire
router.post('/:id/comments', (req, res) => {
    // Ici, on implémente la logique pour ajouter un commentaire
    res.status(501).json({ message: "Fonctionnalité non implémentée" });
});

// Seuls les utilisateurs authentifiés avec les bons rôles peuvent répondre
router.post('/:id/comments/:commentId/reply', 
    AuthenticateController.authenticateToken, 
    AuthenticateController.checkPermission(['super_admin', 'courtier_admin', 'courtier']), 
    (req, res) => {
        // Ici, la logique pour répondre à un commentaire
        res.status(501).json({ message: "Fonctionnalité non implémentée" });
    }
);

module.exports = router;
