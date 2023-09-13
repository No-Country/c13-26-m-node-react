const { Router } = require('express');
const { check } = require('express-validator');

const { validateJWT, validateFields, isAdminRole } = require('../middlewares');

const { createProduct,
        getProducts,
        getProduct,
        updateProduct, 
        deleteProduct } = require('../controllers/products');

const { categoryExistsById, productExistsById } = require('../helpers/db-validators');

const router = Router();

/**
 * {{url}}/api/categories
 */

// Get all categories - public
router.get('/', getProducts );

// Get a category by id - public
router.get('/:id',[
    check('id', 'Not a valid Mongo id').isMongoId(),
    check('id').custom( productExistsById ),
    validateFields,
], getProduct );

// Create category - private - anyone with a valid token
router.post('/', [ 
    validateJWT,
    check('name','Name is required').not().isEmpty(),
    check('category','Not a Mongo id').isMongoId(),
    check('category').custom( categoryExistsById ),
    validateFields
], createProduct );

// Update - private - anyone with a valid token
router.put('/:id',[
    validateJWT,
    // check('category','Not a Mongo id').isMongoId(),
    check('id').custom( productExistsById ),
    validateFields
], updateProduct );

// Delete a category - Admin
router.delete('/:id',[
    validateJWT,
    isAdminRole,
    check('id', 'Not a valid Mongo id').isMongoId(),
    check('id').custom( productExistsById ),
    validateFields,
], deleteProduct);


module.exports = router;
