const express = require('express');
const bodyParser = require('body-parser');

class App {
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }

    middleware() {
        this.express.use(bodyParser.json());
    }

    routes() {
        this.express.get('/', (req, res) => {
            res.send('Teste');
        });
    }
}

module.exports = new App().express;