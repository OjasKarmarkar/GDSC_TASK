require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const apiRoutes = require('./routes/student_routes');

const app = express();

app.use(express.json());
app.use('/api/', apiRoutes);

module.exports = app;