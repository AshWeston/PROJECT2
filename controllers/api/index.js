const router = require("express").Router();

const userRoutes = require("./userRoutes");
const questionRoutes = require("./questionRoutes");

router.use("/users", userRoutes);
router.use("/", questionRoutes);

module.exports = router;
