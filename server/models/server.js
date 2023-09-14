const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const { dbConnection } = require('../database/config');

class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT;

        this.paths = {
            auth:       '/api/auth',
            search:     '/api/search',
            categories: '/api/categories',
            products:   '/api/products',
            users:      '/api/users',
            roles:      '/api/roles',
            uploads:    '/api/uploads',
        }

        // Connect to the database
        this.connectDB();

        // Middlewares
        this.middlewares();

        // Application routes
        this.routes();
    }

    async connectDB() {
        await dbConnection();
    }

    middlewares() {
        // CORS
        this.app.use( cors() );

        // Reading and parsing the body
        this.app.use( express.json() );

        // Public directory
        this.app.use( express.static('public') );

        // File upload - Uploading files
        this.app.use( fileUpload({
            useTempFiles : true,
            tempFileDir : '/tmp/',
            createParentPath: true
        }));
    }

    routes() {
        this.app.use( this.paths.auth, require('../routes/auth'));
        this.app.use( this.paths.search, require('../routes/search'));
        this.app.use( this.paths.categories, require('../routes/categories'));
        this.app.use( this.paths.products, require('../routes/products'));
        this.app.use( this.paths.users, require('../routes/users'));
        this.app.use( this.paths.roles, require('../routes/roles'));
        this.app.use( this.paths.uploads, require('../routes/uploads'));
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Server is running on port', this.port );
        });
    }
}

module.exports = Server;
