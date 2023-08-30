
const validateFields = require('./validate-Fields');
const validateJWT = require('./validate-JWT');
const validateRoles = require('./validate-Roles');

module.exports = {
    ...validateFields,
    ...validateJWT,
    ...validateRoles,
};
