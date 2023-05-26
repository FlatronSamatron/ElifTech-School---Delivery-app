const { Schema, model, Types} = require("mongoose");

const shopSchema = new Schema({
  name: String,
  products:[{ name: String, img: String, price: Number}]
});

const Shop = model("shop", shopSchema);

module.exports = Shop;