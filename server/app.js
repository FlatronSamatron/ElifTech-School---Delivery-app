const path = require("path");
const logger = require("morgan");
const express = require("express");

const cors = require("cors");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../client/build")));

const { shopsRouter, ordersRouter } = require("./routes");

app.use("/api/shops", shopsRouter);
app.use("/api/order", ordersRouter);

app.use("/api", (req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use("/api", (err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

module.exports = app;
