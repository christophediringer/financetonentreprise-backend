class ArticlesService {
    async getAllArticles() {
        return await Article.findAll();
    }

    async getArticleById(id) {
        return await Article.findByPk(id);
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
}

module.exports = new ArticlesService();