const home = (req, res) => {
  res.json("hello");
  console.log("hit home route");
};

module.exports = { home };
