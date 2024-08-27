const CommentsService = require('../Services/CommentsService');
const EmailService = require('../Services/EmailService');

class CommentsController {
    async createComment(request, result) {
        try {
            const commentData = {
                ...request.body,
                user_id: request.user.id
            };
            const newComment = await CommentsService.createComment(commentData);
            
            // Envoyer un e-mail au courtier
            await EmailService.sendNewCommentNotification(newComment);

            result.status(201).json(newComment);
        } catch (error) {
            result.status(500).json({ error: "Une erreur est survenue lors de la création du commentaire" });
        }
    }

    async publishComment(request, result) {
        try {
            const updatedComment = await CommentsService.publishComment(request.params.id);
            if (updatedComment) {
                result.json(updatedComment);
            } else {
                result.status(404).json({ error: "Commentaire non trouvé" });
            }
        } catch (error) {
            result.status(500).json({ error: "Une erreur est survenue lors de la publication du commentaire" });
        }
    }

    // Autres méthodes pour la gestion des commentaires...
}

module.exports = new CommentsController();
