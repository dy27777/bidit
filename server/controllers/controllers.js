require("dotenv").config();
const User = require("../models/User.js");
const Post = require("../models/Post.js");
const jwt = require("jsonwebtoken");
const sha256 = require("crypto-js/sha256");

const encrypt = (pwd) => {
  return sha256(pwd).toString();
};

const home = (req, res) => {
  res.json("hello");
  console.log("hit home route");
};

const addPost = (req, res) => {
  const post = new Post(req.body);

  post
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

const loginUser = (req, res) => {
  const body = req.body;
  User.find({
    $or: [{ username: body.username }, { email: body.username }],
  })
    .then((result) => {
      const clientPwd = encrypt(body.pwd);
      const serverData = result[0];

      if (!serverData) {
        res.json({ auth: false, err: "No such user found", comp: "username" });
      } else if (clientPwd === serverData.pwd) {
        const id = result[0].id;
        const token = jwt.sign({ id }, process.env.JWT_SCRT, {
          expiresIn: "1h",
        });

        res.cookie("tkn", token, { httpOnly: true });
        res.json({ auth: true, redirect: "/" });
      } else {
        res.json({ auth: false, err: "Incorrect password", comp: "pwd" });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const signupUser = (req, res) => {
  const encrypted = encrypt(req.body.pwd);
  const user = { ...req.body, pwd: encrypted };

  const newUser = new User(user);

  newUser
    .save()
    .then((result) => {
      console.log("successfully saved to db");
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getUsers = (req, res) => {
  console.log(req.userId);
  User.find().then((data) => {
    res.json(data);
  });
};

const getPosts = (req, res) => {
  Post.find().then((data) => {
    res.json(data);
  });
};

const saveFile = (req, res) => {
  res.json({ message: "received" });
};

module.exports = {
  home,
  addPost,
  loginUser,
  signupUser,
  getUsers,
  getPosts,
  saveFile,
};
