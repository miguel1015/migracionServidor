const express = require ("express");
const router = express.Router();


router.get("/", (req, res) =>{
    res.send("<h1>lista de tareas</h1>" );       
});


router.get("/complete", (req, res) =>{
    res.send("<h1>tareas completas</h1>  will go to the cinema tomorrow  <br></br> in the office  <br></br>  learn a new lenguaje" );       
});

router.get("/incomplete", (req, res) =>{
    res.send("<h1>tareas incompletas</h1>   practice exercise <br></br>  running in the park  <br></br> got to the gym");   
});



module.exports= router;