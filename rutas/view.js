const express = require("express");
const router = express.Router();
const data = require("../task.json");
const dataes = require("../task.json");
datos = require("../task.json");

router.get("/", (req, res) => {
  res.send(datos);
});

router.get("/incompletas", (req, res) => {
  res.json(data);
  res.end();
});

router.get("/completadas", (req, res) => {
  res.json(dataes);
  res.end();
});

module.exports = router;