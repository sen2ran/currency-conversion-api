# API For Currency Conversion

### Tech
- [ExpressJS] - Fast, unopinionated, minimalist web framework for Node.js
- [Axios] - Promise based HTTP client for the browser and node.js
- [Dotenv] - Module to load environment variables from a .env
- [ExpressJSAsyncErrors] - ES6 async/await support hack for ExpressJS

### Installation

API For Currency Conversion requires [Node.js](https://nodejs.org/) to run.
Install the dependencies and devDependencies and start the server.

```sh
$ cd currency-conversion-api
$ npm install
$ npm run start 
```

API:
```sh
curl :baseURL/api/:FromCurrency/:ToCurrency
```

Response:
```sh
{
    "value": "146.50"
}
```


[ExpressJS]: https://expressjs.com/
[Axios]: https://www.npmjs.com/package/axios
[Dotenv]: https://www.npmjs.com/package/dotenv
[ExpressJSAsyncErrors]: https://www.npmjs.com/package/express-async-errors