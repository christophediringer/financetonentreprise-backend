const express = require('express');
const UsersControllers = require('../Controllers/UsersControllers');
// constante pour spécifier routes
const router = express.Router();
// touots les routes seront précédé par /Users

router.get("/", (request, result) => {UsersControllers.getAllUsers(request,result)});
router.get("/:id", (request, result) => {UsersControllers.getUserById(request,result)});
router.post("/", (request, result) => {UsersControllers.createUser(request,result)});
router.put("/:id", (request, result) => {UsersControllers.updateUser(request,result)});
router.delete("/:id", (request, result) => {UsersControllers.deleteUser(request,result)});


module.exports = router;
