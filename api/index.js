const express = require(`express`);
const router = express.Router();

const tweets = require(`./controllers/tweets`);
const users = require(`./controllers/users`);
const weather = require(`./controllers/weather`);

const logger = require(`./middlewares/logger`);

router.use(`/tweets`, tweets);
router.use(`/users`, users);
router.use(`/weather`, weather);
router.use(logger);

module.exports = router;