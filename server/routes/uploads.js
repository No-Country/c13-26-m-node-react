const { Router } = require('express');
const { check } = require('express-validator');

const { validateFields, validateFileUpload } = require('../middlewares');
const { uploadFile, updateImage, showImage } = require('../controllers/uploads');
const { allowedCollections } = require('../helpers');

const router = Router();

router.post('/', validateFileUpload, uploadFile);

router.put('/:collection/:id', [
    validateFileUpload,
    check('id', 'The id must be a valid MongoDB id').isMongoId(),
    check('collection').custom(c => allowedCollections(c, ['users', 'products'])),
    validateFields
], updateImage )

router.get('/:collection/:id', [
    check('id', 'The id must be a valid MongoDB id').isMongoId(),
    check('collection').custom(c => allowedCollections(c, ['users', 'products'])),
    validateFields
], showImage);

module.exports = router;
