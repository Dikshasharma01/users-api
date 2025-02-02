// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./src/config/db');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./src/docs/swaggerDef');
require('dotenv').config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API Routes
app.use('/api/users', require('./src/routes/userRoutes'));

// Swagger UI route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Default route
app.get('/', (req, res) => {
    res.send('Welcome to the Users API');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Swagger UI available at http://localhost:${PORT}/api-docs`);
});