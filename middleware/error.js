/**
 * [x] Catch unhandled Error
 */
module.exports = function (err, req, res, next) {
  console.log(err); //Can Be use for Loging
  //Sending Error to API
  return res.status(500).send({
    success: false,
    status: "Internal Server Error",
    details: "Server error. Please try again in a bit.",
  });
};
