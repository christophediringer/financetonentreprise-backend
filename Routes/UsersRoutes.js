const express = require('express');
const UsersController = require('../Controllers/UsersControllers');
const AuthenticateController = require('../Controllers/authenticateController');

const router = express.Router();

// Routes publiques
router.post("/register", UsersController.createUser);
router.post("/login", UsersController.login);

// Routes protégées
router.get("/", AuthenticateController.authenticateToken, UsersController.getAllUsers);
router.get("/:id", AuthenticateController.authenticateToken, UsersController.getUserById);
router.put("/:id", AuthenticateController.authenticateToken, UsersController.updateUser);
router.delete("/:id", AuthenticateController.authenticateToken, UsersController.deleteUser);

module.exports = router;

