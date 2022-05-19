const express = require('express');

const app = express();

const cors = require('cors')

class Server {

    constructor () {
        this.app = express();    
        this.port = process.env.PORT;
        this.usersPath = '/users'

        //Middlewares
        this.middlewares();

        //Routes
        this.routes();
    }
    middlewares() {
        //CORS
        this.app.use( cors() );
        //Parseo y lectura de Middlewares
        this.app.use( express.json() );
        //Directorio Público
        

    }

    routes () {
        this.app.use( this.usersPath, require('../routes/user'))

    }

    listen () {

        this.app.listen(process.env.PORT);

    }

}




module.exports = Server;
