const express = require("express");
const app = express();
const port = 8000;
const swaggerDocs = require("./swagger");

let momoItemStorage = [
  {
    name: "Fried Momo",
    price: 170,
  },
  {
    name: "Steam Momo",
    price: 140,
  },
  {
    name: "Jhol Momo",
    price: 150,
  },
];

swaggerDocs(app, port);

/**
 * @swagger
 * /:
 *  get:
 *    summary: Checking the Swagger UI documnetation
 *    description: checking hudai xa hai
 *    responses:
 *      200:
 *          description: Check matrai gareko ho aaru kai ni haina
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  type: string
 */
app.get("/", (req, res) => {
  res.send(momoItemStorage);
});

app.listen(port, () => {
  console.log("Server is running in port", port);
});
