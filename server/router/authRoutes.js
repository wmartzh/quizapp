const router = require("express").Router();
const bodyParser = require("body-parser");
const authController = require("../controllers/authController");

/**
 * @swagger
 * /auth/register:
 *  post:
 *      description: Register a new user
 *      requestBody:
 *          required:true

 * 
 **/
router.post("/register", bodyParser.json(), authController.storeUser);

module.exports = router;
