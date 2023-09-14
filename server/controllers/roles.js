const { Role } = require("../models");

const getRoles = async (req = request, res = response) => {
    const { limit = 5, offset = 0 } = req.query;

    try {
        const [totalRoles, roles] = await Promise.all([
            Role.countDocuments(),
            Role.find()
                .skip(Number(offset))
                .limit(Number(limit))
        ]);

        res.json({
            totalRoles,
            roles
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Internal server error'
        });
    }
};

const createRole = async (req, res) => {
    const role = req.body.role.toUpperCase();

    const existingRole = await Role.findOne({ role });

    if (existingRole) {
        return res.status(400).json({
            msg: `The role ${existingRole.name} already exists`
        });
    }

    // Generate data to save
    const data = {
        role,
        // user: req.user._id
    };
    
    const newRole = new Role(data);

    // Save to the database
    await newRole.save();

    res.status(201).json(newRole);
};

module.exports = {
    createRole,
    getRoles
};
