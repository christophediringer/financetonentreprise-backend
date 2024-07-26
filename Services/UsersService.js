const Users = require('../Models/Users');

class UsersService {
    async getAllUsers() {
        return await Users.findAll();
    }

    async getUserById(id) {
        return await Users.findByPk(id);
    }

    async createUser(userData) {
        return await Users.create(userData);
    }

    async updateUser(id, userData) {
        const user = await Users.findByPk(id);
        if (user) {
            return await user.update(userData);
        }
        return null;
    }

    async deleteUser(id) {
        const user = await Users.findByPk(id);
        if (user) {
            await user.destroy();
            return true;
        }
        return false;
    }
}

module.exports = new UsersService();