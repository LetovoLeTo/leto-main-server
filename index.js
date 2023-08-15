const express = require("express");

const appMain = require("./leto-main-page");

const app = express();
const port = 3000;

app.use("/res", express.static("leto-resources"));

app.use(appMain);

app.listen(port);