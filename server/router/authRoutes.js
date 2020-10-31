const router = require("express").Router();
const bodyParser = require("body-parser");
const authController = require("../controllers/authController");


router.post("/register", bodyParser.json(), authController.storeUser);

module.exports = router;
