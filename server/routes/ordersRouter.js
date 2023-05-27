const express = require("express");

const router = express.Router();

const createError = require("http-errors");

const { Order, joiOrderSchema, Shop} = require("../models");

router.post("/", async (req, res, next) => {
  const { error } = joiOrderSchema.validate(req.body);
  if (error) {
    return next(createError(400, error));
  }

  try {
    const newOrder = await Order.create({ ...req.body, date: Date.now() });
    res.status(201).json(newOrder);
  } catch (error) {
    if (error.message.includes("validation failed")) {
      error.status = 400;
    }
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
