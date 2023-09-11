const express = require('express');
const cors = require('cors');

const { dbConnection } = require('../database/config');

class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT;

        this.paths = {
            auth:   '/api/auth',
            categories: '/api/categories',
            roles:   '/api/roles',
            users:   '/api/users',
        }


        // Conectar a base de datos
        this.dbConnect();

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }

    async dbConnect() {
        await dbConnection();
    }


    middlewares() {

        // CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );

    }

    routes() {
        
        this.app.use( this.paths.auth, require( '../routes/auth' ));
        this.app.use(this.paths.categories, require('../routes/categories'));
        this.app.use(this.paths.roles, require(  '../routes/roles' ));
        this.app.use( this.paths.users, require( '../routes/users' ));
        
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}




module.exports = Server;
