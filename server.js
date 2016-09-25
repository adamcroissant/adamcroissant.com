"use strict";

let express = require("express");
let path = require("path");
let app = express();

app.use("/node_modules",
      express.static(path.join(__dirname, "node_modules")));
app.use(express.static(__dirname));

app.listen(8080);

console.log("The site is now available at http://localhost:8080");
