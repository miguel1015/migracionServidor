const express = require ("express");
const app = express();
const task = require("./task.json")
const port = 7500;


app.get("/", (req, res) =>{
    res.json(task);   
    res.end()
});





app.listen(port, () =>{
    console.log(`server in the runing on port: ${port}`);
})

module.exports= app;