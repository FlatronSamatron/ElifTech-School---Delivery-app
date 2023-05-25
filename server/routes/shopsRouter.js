const express = require("express");

const router = express.Router();

const {Shop} = require('../models')

router.get("/", async (req, res, next) => {
    try {
      const shops = await Shop.find();
      res.json(shops);
    } catch (error) {
      next(error);
    }
  });

module.exports = router;