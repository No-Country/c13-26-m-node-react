const path = require('path');
const fs = require('fs');

const { response } = require('express');
const { uploadFileToServer  } = require('../helpers');

const { User, Product } = require('../models');

const uploadFile = async (req, res = response) => {
    try {
        const name = await uploadFile(req.files, undefined, 'imgs');
        res.json({ name });
    } catch (msg) {
        res.status(400).json({ msg });
    }
}

const updateImage = async (req, res = response) => {
    const { id, collection } = req.params;
    let model;

    switch (collection) {
        case 'users':
            model = await User.findById(id);
            if (!model) {
                return res.status(400).json({
                    msg: `User with id ${id} does not exist`
                });
            }
            break;

        case 'products':
            model = await Product.findById(id);
            if (!model) {
                return res.status(400).json({
                    msg: `Product with id ${id} does not exist`
                });
            }
            break;

        default:
            return res.status(500).json({ msg: 'I forgot to validate this' });
    }

    // Clear previous images
    if (model.img) {
        const imagePath = path.join(__dirname, '../uploads', collection, model.img);
        if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath);
        }
    }

    const name = await uploadFile(req.files, undefined, collection);
    model.img = name;
    await model.save();
    res.json(model);
}

const showImage = async (req, res = response) => {
    const { id, collection } = req.params;
    let model;

    switch (collection) {
        case 'users':
            model = await User.findById(id);
            if (!model) {
                return res.status(400).json({
                    msg: `User with id ${id} does not exist`
                });
            }
            break;

        case 'products':
            model = await Product.findById(id);
            if (!model) {
                return res.status(400).json({
                    msg: `Product with id ${id} does not exist`
                });
            }
            break;

        default:
            return res.status(500).json({ msg: 'I forgot to validate this' });
    }

    if (model.img) {
        const imagePath = path.join(__dirname, '../uploads', collection, model.img);
        if (fs.existsSync(imagePath)) {
            return res.sendFile(imagePath);
        }
    }

    const defaultImagePath = path.join(__dirname, '../assets/no-image.jpg');
    res.sendFile(defaultImagePath);
}

module.exports = {
    uploadFile,
    updateImage,
    showImage,
}
