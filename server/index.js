const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes/routes.js");
const app = express();

require("dotenv").config();

// db connection
const db = process.env.DB_URI;

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("connected to db");
    app.listen(3001, () => {
      console.log("server listening on port 3001");
    });
  })
  .catch((err) => {
    console.log(err);
  });

// middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
app.use("/", routes);
