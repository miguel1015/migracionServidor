const express = require ("express");
const app = express();
const port = 7500;

const guardar = require("./rutas/Edit")
const complete = require("./list-edit-router")
const incomplete = require("./list-edit-router")
const eliminar = require("./rutas/Delete")
const actualizar = require("./rutas/Update")
const { ValidacionPost, validacionPut, requestValid, validUrl } = require("./Middleware/Middleware");




//middlewares
app.use(express.json());
app.use(ValidacionPost);
app.use(validacionPut);
app.use(requestValid)
app.use(validUrl)



app.use("/", incomplete);
app.use("/", complete);
app.use("/", guardar);
app.use("/", eliminar);
app.use("/", actualizar);



app.listen(port, () =>{
    console.log(`server in the runing on port: ${port}`);
})

module.exports= app;