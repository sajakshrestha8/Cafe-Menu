const express = require("express");
const app = express();
const port = 8000;
const swaggerDocs = require("./swagger");

swaggerDocs(app, port);

/**
 * @swagger
 * /:
 * get:
 *  summary: Checking the Swagger UI documnetation
 *  description: checking hudai xa hai
 *  responses:
 *      200:
 *          description: Check matrai gareko ho aaru kai ni haina
 */
app.get("/", (req, res) => [res.send("Checking that is it working or not")]);

app.listen(port, () => {
  console.log("Server is running in port", port);
});
