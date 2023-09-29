const mongoose = require("mongoose");

const config = require("./config");

const dbUrl = config.db.url;

mongoose
  .connect(dbUrl)
  .then(() => console.log("Mongo DB Atlas has been Connected Successfully."))
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
