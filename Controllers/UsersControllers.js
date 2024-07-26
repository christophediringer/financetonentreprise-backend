const UsersService = require('../Services/UsersService');

class UsersController {
    async getAllUsers(request, result) {
        try {
            const users = await UsersService.getAllUsers();
            result.json(users);
        } catch (error) {
            result.status(500)
            result.json({ error: "Une erreur est survenue lors de la récupération des utilisateurs" });
        }
    }

    async getUserById(request, result) {
        try {
            const user = await UsersService.getUserById(request.params.id);
            if (user) {
                result.json(user);
            } else {
                result.status(404)
                result.json({ error: "Utilisateur non trouvé" });
            }
        } catch (error) {
            console.log(error);
            result.status(500);
            result.json({ error: "Une erreur est survenue lors de la récupération de l'utilisateur" });
        }
    }

    async createUser(request, result) {
        try {
            const newUser = await UsersService.createUser(request.body);
            result.status(201).json(newUser);
        } catch (error) {
            result.status(500).json({ error: "Une erreur est survenue lors de la création de l'utilisateur" });
        }
    }

    async updateUser(request, result) {
        try {
            const updatedUser = await UsersService.updateUser(request.params.id, req.body);
            if (updatedUser) {
                result.json(updatedUser);
            } else {
                result.status(404).json({ error: "Utilisateur non trouvé" });
            }
        } catch (error) {
            result.status(500).
            result.json({ error: "Une erreur est survenue lors de la mise à jour de l'utilisateur" });
        }
    }

    async deleteUser(request, result) {
        try {
            const deleted = await UsersService.deleteUser(request.params.id);
            if (deleted) {
                result.status(204).send();
            } else {
                result.status(404)
                result.json({ error: "Utilisateur non trouvé" });
            }
        } catch (error) {
            result.status(500)
            result.json({ error: "Une erreur est survenue lors de la suppression de l'utilisateur" });
        }
    }
}

module.exports = new UsersController();