const express = require('express');
const ContentsController = require('../Controllers/ContentsController')


const router = express.Router();

router.get('/', ContentsController.getAllContents);
router.get('/:id', ContentsController.getContentById);
router.post('/', ContentsController.createContent);
router.put('/:id', ContentsController.updateContent);
router.delete('/:id', ContentsController.deleteContent);

module.exports = router;