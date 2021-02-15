const express = require("express");
const error = require("../middleware/error");
const currencyConverter = require("../routes/currencyConverter");

module.exports = (app) => {
  app.use(express.json());
  //Routes
  app.use("/api", currencyConverter);
  //Catch Unhandled Error
  app.use(error);
};
