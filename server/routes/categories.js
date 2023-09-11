const { Router } = require('express');
const { check } = require('express-validator');

// Import middlewares and controllers
const { validateJWT, validateFields, isAdminRole } = require('../middlewares');
const { createCategory, getCategories, getCategory, updateCategory, deleteCategory } = require('../controllers/categories');
const { categoryExistsById } = require('../helpers/db-validators');

const router = Router();

/**
 * {{url}}/api/categories
 */

// Get all categories - public
router.get('/', getCategories);

// Get a category by ID - public
router.get('/:id', [
    check('id', 'Invalid Mongo ID').isMongoId(),
    check('id').custom(categoryExistsById),
    validateFields,
], getCategory);

// Create category - private - anyone with a valid token
router.post('/', [
    validateJWT,
    check('name', 'Name is required').not().isEmpty(),
    validateFields
], createCategory);

// Update category - private - anyone with a valid token
router.put('/:id', [
    validateJWT,
    check('name', 'Name is required').not().isEmpty(),
    check('id').custom(categoryExistsById),
    validateFields
], updateCategory);

// Delete a category - Admin
router.delete('/:id', [
    validateJWT,
    isAdminRole,
    check('id', 'Invalid Mongo ID').isMongoId(),
    check('id').custom(categoryExistsById),
    validateFields,
], deleteCategory);

module.exports = router;
