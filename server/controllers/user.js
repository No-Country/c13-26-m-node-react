const { response, request } = require('express');
const bcryptjs = require('bcryptjs');
const User = require('../models/user');

const getUsers = async (req = request, res = response) => {
    const { limit = 5, offset = 0 } = req.query;
    const query = { isActive: true };

    try {
        const [totalUsers, users] = await Promise.all([
            User.countDocuments(query),
            User.find(query)
                .skip(Number(offset))
                .limit(Number(limit))
        ]);

        res.json({
            totalUsers,
            users
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Internal server error'
        });
    }
};

const createUser = async (req, res = response) => {
    const { name, email, password, role } = req.body;
    const user = new User({ name, email, password });
    try {
        const salt = bcryptjs.genSaltSync();
        user.password = bcryptjs.hashSync(password, salt);
        await user.save();

        res.json({
            user
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Internal server error'
        });
    }
};

const updateUser = async (req, res = response) => {
    const { id } = req.params;
    const { _id, password, google, email, ...resto } = req.body;

    if (password) {
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync(password, salt);
    }

    try {
        const user = await User.findByIdAndUpdate(id, resto);
        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Internal server error'
        });
    }
};

const partialUpdateUser = (req, res = response) => {
    res.json({
        msg: 'Partial update API - partialUpdateUser'
    });
};

const deleteUser = async (req, res = response) => {
    const { id } = req.params;

    try {
        const user = await User.findByIdAndUpdate(id, { isActive: false });
        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Internal server error - deleteUser'
        });
    }
};

module.exports = {
    getUsers,
    createUser,
    updateUser,
    partialUpdateUser,
    deleteUser,
};
