const express = require("express");
const { home, addPost } = require("./controllers.js");
const router = express.Router();

router.get("/", home);
router.post("/add", addPost);

module.exports = router;
