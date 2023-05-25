const joi = require("joi");
const { Schema, model } = require("mongoose");

const joiOrderSchema = joi.object({
  shop: joi.string().required(),
  user: joi
    .object({
      name: joi.string().required(),
      email: joi.string().email().required(),
      phone: joi.string().required(),
      address: joi.string().required(),
    })
    .required(),
  items: joi.array().min(1).required(),
  totalPrice: joi.number().min(1).required(),
  date: joi.date(),
});

const orderSchema = new Schema({
  shop: String,
  user: { name: String, email: String, phone: Number, address: String },
  items: Array,
  totalPrice: String,
  date: Date,
});

const Order = model("order", orderSchema);

module.exports = { Order, joiOrderSchema };
