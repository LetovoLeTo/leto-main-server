const express = require("express");

const appMain = require("./leto-main-page");
const appMap = require("./leto-map");
const appSites = require("./leto-sites");

const app = express();
const port = 3000;

app.use("/res", express.static("leto-resources"));

app.use(appMain);
app.use(appMap);
app.use(appSites);

app.listen(port);