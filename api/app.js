require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const apiRoutes = require('./routes/student_routes');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.options('*', cors());
app.use('/api/', apiRoutes);

module.exports = app;