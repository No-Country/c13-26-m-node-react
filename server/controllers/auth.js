const { response } = require('express');
const bcryptjs = require('bcryptjs');

const User = require('../models/user');
const { generateJWT } = require('../helpers/generate-JWT');

const login = async (req, res = response) => {
    const { email, password } = req.body;

    try {
        // Check if the email exists
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                msg: 'Incorrect email or password - email'
            });
        }

        // Check if the user is active
        if (!user.isActive) {
            return res.status(400).json({
                msg: 'Incorrect email or password - account inactive'
            });
        }

        // Verify the password
        const isPasswordValid = bcryptjs.compareSync(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({
                msg: 'Incorrect email or password - password'
            });
        }

        // Generate the JWT
        const token = await generateJWT(user.id);

        res.json({
            user,
            token
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Please contact the administrator'
        });
    }
};

module.exports = {
    login
};
