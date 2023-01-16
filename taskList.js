const express = require ("express");
const app = express();
const port = 7500;

const lista = require('./list-view-router');
app.use('/', lista);

const edit = require('./list-edit-router');
app.use('/', edit);




app.listen(port, () =>{
    console.log(`server in the runing on port: ${port}`);
})

module.exports= app;