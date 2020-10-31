const router = require("express").Router();
const authRoutes = require("./router/authRoutes")

router.use('/auth',authRoutes)


module.exports = router;