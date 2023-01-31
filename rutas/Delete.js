const express = require("express")
const eliminar = express.Router()
const fs = require("fs")


eliminar.delete("/id", (req, res) => {
    const data = JSON.parse(fs.readFileSync("./task.json", "utf-8"))
    const {id} = req.params
    const borrar = data.filter((task) => task.id != id)
    fs.writeFileSync("./task.json", JSON.stringify(borrar))
    res.json({message: `Id = ${id} eliminado exitosamente`})
    res.end
})

module.exports = eliminar