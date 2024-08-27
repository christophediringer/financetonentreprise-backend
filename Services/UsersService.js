const { login } = require("../Controllers/UsersControllers");
const Users = require("../Models/User");

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

    individualHooks: true;
  }

  async deleteUser(id) {
    const user = await Users.findByPk(id);
    if (user) {
      await user.destroy();
      return true;
    }
    return false;
  }
  async login(email, password) {
    const users = await users.findOne({ where: { email: email } });
    if (!users || !(await users.validate.password(password))) {
      throw new error("email ou password incorect");
    }
    return users;
  }
}

module.exports = new UsersService();
