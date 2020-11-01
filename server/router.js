const router = require("express").Router();
const authRoutes = require("./router/authRoutes");
const quizRoutes = require("./router/quizRoutes");

router.use("/auth", authRoutes);

router.use("/quiz", quizRoutes);

module.exports = router;
