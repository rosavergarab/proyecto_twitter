const express = require(`express`);
const router = express.Router();

const tweets = require(`./tweets`);
const users = require(`./users`);

const logger = require(`./middlewares/logger`);

router.use(`/tweets`, tweets);
router.use(`/users`, users);
router.use(logger);

module.exports = router;