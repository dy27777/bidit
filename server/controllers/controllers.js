const User = require("../models/User.js");
const sha256 = require("crypto-js/sha256");
const { enc } = require("crypto-js");

const encrypt = (obj) => {
  return { ...obj, pwd: sha256(obj.pwd).toString() };
};

const home = (req, res) => {
  res.json("hello");
  console.log("hit home route");
};

const addPost = (req, res) => {
  console.log(req.body);
  res.json(req.body);
};

const loginUser = (req, res) => {
  res.json(req.body);
};

const signupUser = (req, res) => {
  const encrypted = encrypt(req.body);
  const newUser = new User(encrypted);

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

const testGetUsers = (req, res) => {
  User.find().then((data) => {
    res.json(data);
  });
};

module.exports = { home, addPost, loginUser, signupUser, testGetUsers };
