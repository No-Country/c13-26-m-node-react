const { response, request } = require('express');
const jwt = require('jsonwebtoken');

const { User } = require('../models');

const validateJWT = async (req = request, res = response, next) => {
    const token = req.header('x-token');
    console.log(token)
    if (!token) {
        return res.status(401).json({
            msg: 'No token found in the request'
        });
    }

    try {
        const { uid } = jwt.verify(token, process.env.SECRET_OR_PRIVATE_KEY);

        // Read the user corresponding to the uid
        const user = await User.findById(uid);

        if (!user) {
            return res.status(401).json({
                msg: 'Invalid token - user does not exist in the database'
            });
        }

        // Verify if the uid has isActive set to true
        if (!user.isActive) {
            return res.status(401).json({
                msg: 'Invalid token - user with isActive: false'
            });
        }

        req.user = user;
        next();

    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg: 'Invalid token'
        });
    }
};

module.exports = {
    validateJWT
};
