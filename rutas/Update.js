const express = require("express");
const update = express.Router();
const fs = require("fs");

update.put("/:id", express.json(), (req, res) => {
  const datos = JSON.parse(fs.readFileSync("./task.json", "utf-8"));
  const { id } = req.params;
  datos.map((task) => {
    if (task.id == id) {
      task.descripcion = req.body.descripcion;
      task.estado = req.body.estado;
    }
  });
  fs.writeFileSync("./task.json", JSON.stringify(datos));
  res.json({ message: `Tarea con el id: ${id} actualizada con exito` });
  res.send();
});

module.exports = update