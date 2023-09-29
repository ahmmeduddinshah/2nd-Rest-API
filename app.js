const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/userRoute");
require("./configuration/db");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/users", userRouter);

app.get("/", (req, res) => res.sendFile(__dirname + "/./views/home.html"));

app.use((req, res, next) =>
  res.status(404).send({ message: "Route Not Found." })
);

app.use((err, req, res, next) =>
  res.status(500).send({ message: "Something Broke." })
);

module.exports = app;
