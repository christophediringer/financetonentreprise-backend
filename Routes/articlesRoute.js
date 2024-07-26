const express = require('express');
const ArticlesController = require('../controllers/ArticleController');

const router = express.Router();

router.get('/', ArticlesController.getAllArticles);
router.get('/:id', ArticlesController.getArticleById);
router.post('/', ArticlesController.createArticle);
router.put('/:id', ArticlesController.updateArticle);
router.delete('/:id', ArticlesController.deleteArticle);

module.exports = router;