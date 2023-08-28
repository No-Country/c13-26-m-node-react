

const dbValidators = require('./db-validators');
const generateJWT   = require('./generate-JWT');



module.exports = {
    ...dbValidators,
    ...generateJWT,
}