const ArticlesService = require('../Services/ArticlesService');

class ArticlesController {
    async getAllArticles(request, result) {
        try {
            const articles = await ArticlesService.getAllArticles();
            result.json(articles);
        } catch (error) {
            console.error("Erreur dans getAllArticles:", error);
            result.status(500).json({ error: "Une erreur est survenue lors de la récupération des articles" });
        }
    }

    async getArticleById(request, result) {
        try {
            const article = await ArticlesService.getArticleById(request.params.id);
            if (article) {
                result.json(article);
            } else {
                result.status(404).json({ error: "Article non trouvé" });
            }
        } catch (error) {
            console.error(error);
            result.status(500).json({ error: "Une erreur est survenue lors de la récupération de l'article" });
        }
    }

    async createArticle(request, result) {
        try {
            const newArticle = await ArticlesService.createArticle(request.body);
            result.status(201).json(newArticle);
        } catch (error) {
            console.error("Erreur dans createArticle:", error);
            result.status(500).json({ error: "Une erreur est survenue lors de la création de l'article" });
        }
    }

    async updateArticle(request, result) {
        try {
            const updatedArticle = await ArticlesService.updateArticle(request.params.id, request.body);
            if (updatedArticle) {
                result.json(updatedArticle);
            } else {
                result.status(404).json({ error: "Article non trouvé" });
            }
        } catch (error) {
            console.error("Erreur dans updateArticle:", error);
            result.status(500).json({ error: "Une erreur est survenue lors de la mise à jour de l'article" });
        }
    }

    async deleteArticle(request, result) {
        try {
            const deleted = await ArticlesService.deleteArticle(request.params.id);
            if (deleted) {
                result.status(204).send();
            } else {
                result.status(404).json({ error: "Article non trouvé" });
            }
        } catch (error) {
            console.error("Erreur dans deleteArticle:", error);
            result.status(500).json({ error: "Une erreur est survenue lors de la suppression de l'article" });
        }
    }
}

module.exports = new ArticlesController();

