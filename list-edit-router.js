const express = require ("express");
const router = express.Router();


router.get("/edit", (req, res) =>{
    res.send("<h1>lista Editables</h1>");       
});


router.post("/complete", (req, res) =>{
    res.send("Got a POST request");       
});

router.delete("/complete", (req, res) =>{
    res.send("Got a DELETE request at /complete");   
});

router.put("/complete", (req, res) =>{
    res.send("Got a update request at /complete");   
});



module.exports= router;