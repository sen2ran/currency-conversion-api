/**
 * [x]Throw Error for unhandled Error
 */
require("express-async-errors");  //handling unhandle error for Promises
module.exports = function () {
  process.on("unhandledRejection", (ex) => {
    throw ex;
  });
};
