const express = require("express");
const cors = require("cors");
const { errors } = require("celebrate"); // Retorno de erros de validação formatados

const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;
