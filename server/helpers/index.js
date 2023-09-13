

const dbValidators = require('./db-validators');
const generateJWT   = require('./generate-JWT');
const uploadFileToServer = require('./upload-file');


module.exports = {
    ...dbValidators,
    ...generateJWT,
    ...uploadFileToServer,
}