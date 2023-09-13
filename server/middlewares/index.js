
const validateFields = require('./validate-Fields');
const validateJWT = require('./validate-JWT');
const validateRoles = require('./validate-Roles');
const validateFile = require('./validate-file');

module.exports = {
    ...validateFields,
    ...validateJWT,
    ...validateRoles,
    ...validateFile,
};
