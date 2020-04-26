const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const UserController = require('./controllers/userController');

const app = express();
const { mongoose } = require('./db');

app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:3001' }))

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log("Server is up"))

app.use('/', UserController);