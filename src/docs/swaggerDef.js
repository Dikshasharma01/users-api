const swaggerJsdoc = require('swagger-jsdoc');
const path = require('path');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Users API',
            version: '1.0.0',
            description: 'A RESTful API for managing users with CRUD and advanced filtering capabilities.',
        },
        servers: [
            {
                url: 'http://localhost:5000',
                description: 'Local server',
            },
        ],
    },
    // Path to the API definition file(s)
    apis: [path.join(__dirname, 'components.yml')],
};

const swaggerSpec = swaggerJsdoc(options);
module.exports = swaggerSpec;