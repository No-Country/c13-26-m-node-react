const Role = require('../models/role');
const { User, Category, Product } = require('../models');

const isValidRole = async (role = '') => {
    const existingRole = await Role.findOne({ role });
    if (!existingRole) {
        throw new Error(`The role ${role} is not registered in the database`);
    }
}

const emailExists = async (email = '') => {
    const emailExists = await User.findOne({ email });
    if (emailExists) {
        throw new Error(`The email ${email} is already registered`);
    }
}

const userExistsById = async (id) => {
    const existingUser = await User.findById(id);
    if (!existingUser) {
        throw new Error(`User with ID ${id} does not exist`);
    }
}

const categoryExistsById = async (id) => {
    const existingCategory = await Category.findById(id);
    if (!existingCategory) {
        throw new Error(`Category with ID ${id} does not exist`);
    }
}

const productExistsById = async (id) => {
    const existingProduct = await Product.findById(id);
    if (!existingProduct) {
        throw new Error(`Product with ID ${id} does not exist`);
    }
}

const validateAllowedCollections = (collection = '', collections = []) => {
    const isIncluded = collections.includes(collection);
    if (!isIncluded) {
        throw new Error(`Collection ${collection} is not allowed. Allowed collections are: ${collections}`);
    }
    return true;
}

module.exports = {
    isValidRole,
    emailExists,
    userExistsById,
    categoryExistsById,
    productExistsById,
    validateAllowedCollections
}
