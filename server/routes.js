const express = require("express");
const { home } = require("./controllers.js");
const router = express.Router();

router.get("/", home);

module.exports = router;
