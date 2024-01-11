const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const app = express();

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log(`successfully connected to database`))
  .catch((err) => {
    console.log(err);
  });
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server listening at ${port}`);
});
