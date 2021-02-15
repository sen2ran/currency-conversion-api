/**
 * [x] Load .env to node App
 */
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  port: process.env.PORT,
  apiLayerKey: process.env.APILAYERKEY,
};
