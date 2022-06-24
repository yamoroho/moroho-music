const Router = require("express")
const router = new Router();
const trackRouter = require("./trackRouter")

router.use('/music', trackRouter);

module.exports = router;