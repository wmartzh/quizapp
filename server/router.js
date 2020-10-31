const router = require("express").Router();
const authRoutes = require("./router/authRoutes");

/**
 *  @swagger
 *  /auth
 */
router.use("/auth", authRoutes);

module.exports = router;
