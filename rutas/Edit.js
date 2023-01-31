const express = require("express");
const router = express.Router();
const data = require("../task.json");
const fs = require("fs");

router.post("/guardar",  (req, res) => {
  const datos = req.body;
  data.push(datos);
  fs.writeFileSync("./task.json", JSON.stringify(data));
  res.send("Recibido correctamente!");
  res.end();
});

module.exports = router;