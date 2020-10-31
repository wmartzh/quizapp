const router = require("express").Router();
const bodyParser = require("body-parser");
const authController = require("../controllers/authController");


router.use(bodyParser.json());

router.post("/register", authController.storeUser);
router.post("/login", authController.login);


module.exports = router;
