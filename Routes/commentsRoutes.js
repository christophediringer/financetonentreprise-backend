const express = require('express');
const CommentsController = require('../Controllers/CommentsController');
const AuthenticateController = require('../Controllers/authenticateController');

const router = express.Router();

router.post('/', AuthenticateController.authenticateToken, (request, result) => {CommentsController.createComment(request, result)});
router.put('/:id/publish', AuthenticateController.authenticateToken, (request, result) => {CommentsController.publishComment(request, result)});

module.exports = router;
