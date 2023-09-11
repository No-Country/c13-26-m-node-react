const Role = require('../models/role');
const { User, Category } = require('../models');

const isValidRole = async (role = '') => {
    
    if (!role) {
        return true;
    }

    const roleExists = await Role.findOne({ role });
    if (!roleExists) {
        throw new Error(`The role ${role} is not registered in the database`);
    }
};

const emailExists = async (email = '') => {
    const emailExists = await User.findOne({ email });
    if (emailExists) {
        throw new Error(`The email ${email} is already registered`);
    }
};

const userExistsById = async (id) => {
    const userExists = await User.findById(id);
    if (!userExists) {
        throw new Error(`The ID does not exist: ${id}`);
    }
}

/**
 * Validate allowed collections
 */
const allowedCollections = (collection = '', collections = []) => {
    const included = collections.includes(collection);
    if (!included) {
        throw new Error(`The collection ${collection} is not allowed. Allowed collections: ${collections}`);
    }
    return true;
}

/**
 * Categories
 */
const categoryExistsById = async (id) => {
    const categoryExists = await Category.findById(id);
    if (!categoryExists) {
        throw new Error(`The id ${id} does not exist`);
    }
}
module.exports = {
    isValidRole,
    emailExists,
    userExistsById,
    allowedCollections,
    categoryExistsById,
};
