const { Router } = require('express');
const { check } = require('express-validator');

const { validateJWT, adminRole, validateFields } = require('../middlewares');
const { createRole, getRoles } = require('../controllers/role');

const router = Router();

router.get('/', [], getRoles);

router.post('/', [
    // validateJWT,
    // adminRole,
    check('role', 'Role is required').notEmpty(),
    validateFields,
], createRole);

module.exports = router;
