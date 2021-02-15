const express = require("express");
const axios = require("axios");
const { apiLayerKey } = require("../config");
const router = express.Router();

const { isCurrencyExistFn: iCE } = require("../util/CurrencyCheck"); //=> Function Renaming for easy use

/**
 * [x] Check from and to currencyCode valid or not
 * [x] If it's not vaild send return error reponse to the API caller
 * [x] Call 3rd Party API
 * [x] Get Value for represented CurrencyCodes  (We'll only get USD only for free api key)
 * [x] Calculte the from to to currency value and send success resposnse
 */
router.get("/:fromCurrency/:toCurrency", async (req, res) => {
  const { fromCurrency, toCurrency } = req.params; //object destructuring

  if (!iCE(fromCurrency.toUpperCase()) || !iCE(toCurrency.toUpperCase())) {
    return res.status(400).send({
      error: "Please Enter Standard Currency Code.",
    });
  }

  let { data } = await axios.get(
    `http://apilayer.net/api/live?access_key=${apiLayerKey}`
  );

  if (!data.success) {
    return res.status(400).send({
      error: "Something Wrong with API",
    });
  }

  let value =
    data.quotes[`USD${toCurrency.toUpperCase()}`] /
    data.quotes[`USD${fromCurrency.toUpperCase()}`];

  res
    .status(200)
    .header({
      "X-LastUpdatedTime": new Date(data.timestamp * 1000).toISOString(),
    })
    .send({
      value: value.toFixed(2),
    });
});

module.exports = router;