/**
 * Main File to handle The Beginning the API End Point
 */
const { port } = require("./config");
const express = require("express");
const app = express();

require("./startup/unhandledRejection")(); //Throw Un handled error
require("./startup/routes")(app);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
