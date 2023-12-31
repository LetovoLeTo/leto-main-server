const express = require("express");
const { join } = require("path");

const appMain = require("./leto-main-page");
const appMap = require("./leto-map");
const appSites = require("./leto-sites");
const appHomework = require("./leto-homework");
const appTimetables = require("./leto-timetables");

const app = express();
const port = 3000;

app.use("/res", express.static(join(__dirname, "leto-resources")));

// DO NOT CHANGE THE ORDER IN WHICH THE MODULES ARE BEING USED!
app.use(appTimetables);
app.use(appSites);
app.use(appMap);
app.use(appMain);
app.use(appHomework);

app.listen(port);