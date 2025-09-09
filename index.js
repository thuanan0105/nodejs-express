/**
 * This script sets up a basic Express.js server.
 *
 * - The server listens on port 3000.
 * - It defines a root endpoint (`/`) that responds with "Hello World!".
 * - Logs a message to the console when the server starts successfully.
 */

const express = require("express");
const app = express();
const port = 3000;

// Root endpoint
app.get("/", (req, res) => {
  var a = 1;
  var b = 2;
  var c = a + b;
  console.log("Sum:", c);
  res.send("Hello World!");
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
