const express = require("express");
const jwt = require("jsonwebtoken");
const {
  home,
  addPost,
  loginUser,
  signupUser,
  getUsers,
  getPosts,
} = require("../controllers/controllers.js");
const router = express.Router();

const verifyJWT = (req, res, next) => {
  const token = req.cookies.tkn;

  if (!token) {
    res.json({ message: "failed, no token" });
  } else {
    jwt.verify(token, process.env.JWT_SCRT, (err, payload) => {
      if (err) {
        res.json({
          message: "failed, invalid token",
        });
      } else {
        req.userId = payload.id;
        next();
      }
    });
  }
};

router.get("/", home);
router.get("/getUsers", verifyJWT, getUsers);
router.get("/getPosts", getPosts);
router.post("/add", addPost);
router.post("/login", loginUser);
router.post("/signup", signupUser);

module.exports = router;
