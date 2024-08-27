const CategoriesService = require ('../Services/Categorieservice')


class CategoriesController {
    async getAllCategories(request, result) {
        try {
            const categories = await CategoriesService.getAllCategories();
            result.json(categories);
        } catch (error) {
            result.status(500);
            result.json({ error: "Une erreur est survenue lors de la récupération des catégories" });
        }
    }

    async getCategoryById(request, result) {
        try {
            const category = await CategoriesService.getCategoryById(request.params.id);
            if (category) {
                result.json(category);
            } else {
                result.status(404);
                result.json({ error: "Catégorie non trouvée" });
            }
        } catch (error) {
            console.log(error);
            result.status(500);
            result.json({ error: "Une erreur est survenue lors de la récupération de la catégorie" });
        }
    }

    async createCategory(request, result) {
        try {
            const newCategory = await CategoriesService.createCategory(request.body);
            result.status(201).json(newCategory);
        } catch (error) {
            result.status(500).json({ error: "Une erreur est survenue lors de la création de la catégorie" });
        }
    }

    async updateCategory(request, result) {
        try {
            const updatedCategory = await CategoriesService.updateCategory(request.params.id, request.body);
            if (updatedCategory) {
                result.json(updatedCategory);
            } else {
                result.status(404).json({ error: "Catégorie non trouvée" });
            }
        } catch (error) {
            result.status(500);
            result.json({ error: "Une erreur est survenue lors de la mise à jour de la catégorie" });
        }
    }

    async deleteCategory(request, result) {
        try {
            const deleted = await CategoriesService.deleteCategory(request.params.id);
            if (deleted) {
                result.status(204).send();
            } else {
                result.status(404);
                result.json({ error: "Catégorie non trouvée" });
            }
        } catch (error) {
            result.status(500);
            result.json({ error: "Une erreur est survenue lors de la suppression de la catégorie" });
        }
    }
}

module.exports = new CategoriesController();