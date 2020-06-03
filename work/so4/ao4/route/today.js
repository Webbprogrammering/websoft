/**
 * Route for today.
 */
"use strict";

var express = require("express");
var router  = express.Router();
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
router.get("/", (req, res) => {
    let data = [];
    let text = {};
    var i;
for (i = 0; i < 8; i++) {
  data[i] = getRandomInt(35)
}
    data.date = data;

    res.render("today", data);
});

module.exports = router;