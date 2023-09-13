const { Router } = require('express');
const { check } = require('express-validator');

const {
    validateFields,
    validateJWT,
    hasRole
} = require('../middlewares');

const {
    isValidRole,
    emailExists,
    userExistsById
} = require('../helpers');

const {
    getUsers,
    updateUser,
    createUser,
    deleteUser,
    partialUpdateUser
} = require('../controllers/users');

const router = Router();

// Get all users
router.get('/', getUsers);

// Update user by ID
router.put(
    '/:id',
    [
        // validateJWT,
        check('id', 'Invalid ID').isMongoId(),
        check('id').custom(userExistsById),
        check('role').custom(isValidRole),
        validateFields
    ],
    updateUser
);

// Create a new user
router.post(
    '/',
    [
        check('name', 'Name is required').not().isEmpty(),
        check('password', 'Password must be at least 6 characters').isLength({ min: 6 }),
        check('email', 'Invalid email').isEmail(),
        check('email').custom(emailExists),
        check('role').custom(isValidRole),
        validateFields
    ],
    createUser
);

// Delete user by ID
router.delete(
    '/:id',
    [
        validateJWT,
        hasRole('ADMIN_ROLE', 'USER_ROLE'),
        check('id', 'Invalid ID').isMongoId(),
        check('id').custom(userExistsById),
        validateFields
    ],
    deleteUser
);

// Update user partially
router.patch('/', partialUpdateUser);

module.exports = router;
