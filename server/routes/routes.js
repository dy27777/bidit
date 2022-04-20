const express = require("express");
const {
  home,
  addPost,
  loginUser,
  signupUser,
  testGetUsers,
} = require("../controllers/controllers.js");
const router = express.Router();

router.get("/", home);
router.get("/test", testGetUsers);
router.post("/add", addPost);
router.post("/login", loginUser);
router.post("/signup", signupUser);

module.exports = router;
