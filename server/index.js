require("dotenv").config({ path: "./.env" });
const express = require("express");
const yaml = require("yamljs");
const router = require("./router");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const apiDoc = yaml.load("./api_docs.yml");
const connection = require("./connection");

const app = express();

connection();

var corsOptions = {
	origin: "127.0.0.1:" + process.env.CORS_PORT,
};

const port = process.env.SERVER_PORT;

app.use(cors(corsOptions));

app.use("/v1", router);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(apiDoc));

app.listen(port, () => {
	console.log("Server running at http://localhost:" + port);
});
