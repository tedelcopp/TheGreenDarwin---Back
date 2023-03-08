const { Router } = require('express');
const { deleteCategory } = require('../controllers/Categories/deleteCategory');
const { getAllCategories } = require('../controllers/Categories/getAllCategories')
const { postCategory } = require('../controllers/Categories/postCategory');
const { validatePostCategory } = require('../middlewares/validatePostCategory');
const router = Router();

router.get('/', getAllCategories)
router.post("/",validatePostCategory, postCategory)
router.delete('/:name', deleteCategory)

module.exports = router;