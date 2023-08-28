const express = require('express');
const cors = require('cors');

const { dbConnection } = require('../database/config');

class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT;

        this.paths = {
            auth:   '/api/auth',
            user:   '/api/users',
            role:   '/api/role',
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
        this.app.use( this.paths.user, require( '../routes/user' ));
        this.app.use(this.paths.role, require(  '../routes/role' ));
        
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}




module.exports = Server;
