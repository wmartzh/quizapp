const router = require("express").Router();
const bodyParser = require("body-parser");
const {auth} = require("../middlewares/authMiddleware")
const quizController = require("../controllers/quizController");

router.use(bodyParser.json());

router.post("/",auth,quizController.storeQuiz)



module.exports = router;
