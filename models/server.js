const express = require('express');

const app = express();

const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {

    constructor () {
        this.app = express();    
        this.port = process.env.PORT;
        this.authPath = '/auth';
        this.usersPath = '/users';

        //Connect to DB
        this.connectToDB();

        //Middlewares
        this.middlewares();

        //Routes
        this.routes();
    }

    async connectToDB () {
        await dbConnection();
    }

    middlewares() {
        //CORS
        this.app.use( cors() );
        //Parseo y lectura de Middlewares
        this.app.use( express.json() );
        //Directorio Público
        

    }

    routes () {
        this.app.use( this.authPath, require('../routes/auth'));
        this.app.use(this.usersPath, require('../routes/user'))

    }

    listen () {

        this.app.listen(process.env.PORT);

    }

}




module.exports = Server;
