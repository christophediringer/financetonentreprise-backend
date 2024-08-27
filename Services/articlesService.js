const { Article, User } = require('../models');
// const { Article, Comment, User } = require('../models');

class ArticlesService {
    async getAllArticles() {
        return await Article.findAll({
            include: [
                { 
                    model: User,
                    attributes: ['id', 'first_name', 'last_name', 'email']
                },
                // Commenté temporairement jusqu'à l'implémentation du modèle Comment
                /*
                {
                    model: Comment,
                    include: [
                        {
                            model: User,
                            attributes: ['id', 'first_name', 'last_name', 'email']
                        }
                    ]
                }
                */
            ],
            order: [['created_at', 'DESC']]
        });
    }

    async getArticleById(id) {
        return await Article.findByPk(id, {
            include: [
                { 
                    model: User,
                    attributes: ['id', 'first_name', 'last_name', 'email']
                },
                // Commenté temporairement jusqu'à l'implémentation du modèle Comment
                /*
                {
                    model: Comment,
                    include: [
                        {
                            model: User,
                            attributes: ['id', 'first_name', 'last_name', 'email']
                        }
                    ]
                }
                */
            ]
        });
    }

    async createArticle(articleData) {
        return await Article.create(articleData);
    }

    async updateArticle(id, articleData) {
        const article = await Article.findByPk(id);
        if (article) {
            return await article.update(articleData);
        }
        return null;
    }

    async deleteArticle(id) {
        const article = await Article.findByPk(id);
        if (article) {
            await article.destroy();
            return true;
        }
        return false;
    }

    // Méthodes pour les commentaires, à implémenter plus tard
    /*
    async addComment(articleId, content, userId) {
        const article = await Article.findByPk(articleId);
        if (!article) {
            throw new Error("Article not found");
        }
        return await Comment.create({
            content,
            articleId,
            userId
        });
    }

    async replyToComment(articleId, commentId, content, userId) {
        const comment = await Comment.findOne({
            where: { id: commentId, articleId: articleId }
        });
        if (!comment) {
            throw new Error("Comment not found");
        }
        return await Comment.create({
            content,
            articleId,
            userId,
            parentCommentId: commentId
        });
    }
    */
}

module.exports = new ArticlesService();
