const express = require("express");
const cors = require("cors");
const configureDb = require("./config/database.js");

const app = express();
port = 3070;

app.use(express.json());
app.use(cors());

configureDb();

app.listen(port, () => {
  console.log("server running on port", port);
});
