require("dotenv").config({ path: "./.env" });
const express = require("express");
const router = require("./router");
const cors = require("cors");

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const especs = swaggerJsDoc(require("./swaggerOptions"));

const connection = require("./connection");

const app = express();
connection();
var corsOptions = {
	origin: "127.0.0.1:" + process.env.SERVER_PORT,
};

const port = process.env.SERVER_PORT;

app.use(cors(corsOptions));

app.use("/docs", swaggerUi.serve, swaggerUi.setup(especs));
app.use("/v1", router);

app.listen(port, () => {
	console.log("Server running at http://localhost:" + port);
});
