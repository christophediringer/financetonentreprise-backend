const Comments = require('../Models/Comments');

class CommentsService {
    async createComment(commentData) {
        return await Comments.create(commentData);
    }

    async publishComment(id) {
        const comment = await Comments.findByPk(id);
        if (comment) {
            return await comment.update({ is_published: true });
        }
        return null;
    }

    // Autres méthodes pour la gestion des commentaires...
}

module.exports = new CommentsService();
