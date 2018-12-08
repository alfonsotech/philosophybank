const router = require("express").Router();
const resourcesRoutes = require("./resources");
const pathsRoutes = require("./paths");

router.use("/resources", resourcesRoutes);
router.use("/paths", pathsRoutes);

module.exports = router;
