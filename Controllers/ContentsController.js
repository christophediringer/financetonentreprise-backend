const ContentsService = require('../Services/contentservice');

class ContentsController {
    async getAllContents(request, result) {
        try {
            const contents = await ContentsService.getAllContents();
            result.json(contents);
        } catch (error) {
            result.status(500);
            result.json({ error: "Une erreur est survenue lors de la récupération des contenus" });
        }
    }

    async getContentById(request, result) {
        try {
            const content = await ContentsService.getContentById(request.params.id);
            if (content) {
                result.json(content);
            } else {
                result.status(404);
                result.json({ error: "Contenu non trouvé" });
            }
        } catch (error) {
            console.log(error);
            result.status(500);
            result.json({ error: "Une erreur est survenue lors de la récupération du contenu" });
        }
    }

    async createContent(request, result) {
        try {
            const newContent = await ContentsService.createContent(request.body);
            result.status(201).json(newContent);
        } catch (error) {
            result.status(500).json({ error: "Une erreur est survenue lors de la création du contenu" });
        }
    }

    async updateContent(request, result) {
        try {
            const updatedContent = await ContentsService.updateContent(request.params.id, request.body);
            if (updatedContent) {
                result.json(updatedContent);
            } else {
                result.status(404).json({ error: "Contenu non trouvé" });
            }
        } catch (error) {
            result.status(500);
            result.json({ error: "Une erreur est survenue lors de la mise à jour du contenu" });
        }
    }

    async deleteContent(request, result) {
        try {
            const deleted = await ContentsService.deleteContent(request.params.id);
            if (deleted) {
                result.status(204).send();
            } else {
                result.status(404);
                result.json({ error: "Contenu non trouvé" });
            }
        } catch (error) {
            result.status(500);
            result.json({ error: "Une erreur est survenue lors de la suppression du contenu" });
        }
    }
}

module.exports = new ContentsController();