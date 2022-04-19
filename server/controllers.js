const home = (req, res) => {
  res.json("hello");
  console.log("hit home route");
};

const addPost = (req, res) => {
  console.log(req.body);
  res.json(req.body);
};

module.exports = { home, addPost };
