const express = require ("express");
const app = express();
const port = 7500;

const guardar = require("./rutas/Edit")
const complete = require("./list-edit-router")
const incomplete = require("./list-edit-router")
const eliminar = require("./rutas/Delete")
const actualizar = require("./rutas/Update")
const { ValidacionPost, validacionPut, requestValid, validUrl } = require("./Middleware/Middleware");
const jwt = require("jsonWebToken")
require("dotenv").config()
app.set("view engine", "ejs")



//middlewares
// app.use(express.json());
// app.use(ValidacionPost);
// app.use(validacionPut);
// app.use(requestValid)
// app.use(validUrl)

// app.use(require("./list-view-router"))


app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use("/", incomplete);
app.use("/", complete);
app.use("/", guardar);
app.use("/", eliminar);
app.use("/", actualizar);




app.get("/task", validateToken, (req, res)=>{
    res.send(`
            <html>
            <head>
                <title>Login</title>
            </head>
            <body bgcolor="Silver" >
                <center>
                <H1>HOLA sr miguel</H1> <h1>tareas completas😎</h1>  will go to the cinema tomorrow✔  <br></br> in the office✔  <br></br>  learn a new lenguaje✔ <br></br><br></br> <h1>tareas incompletas🥴</h1>   practice exercise❌ <br></br>  running in the park❌  <br></br> got to the gym❌
                </center>
            </body>
            </html>`
)
    username: req.user
})


app.get("/", (req, res) => {
    res.send(`<html>
                <head>
                    <title>Login</title>
                </head>
                <body bgcolor="Silver" >
                    <form method="POST" action="/login">
                        <center>
                        <h1>Login</h1>
                        Nombre de usuario: <input type="text" name="text"><br/>  
                        Contraseña: <input type="password" name="password"><br/> 
                        <input type="submit" value="iniciar sesion"/>
                        </center>
                    </form>
                </body>
            </html>`
    )
})


app.post("/login", (req, res) => {
    const {username, password} = req.body

    //consultar base de datos y ver que existan username y password
    const user = {username : username}
    
    const accesToken = generateAccessToken(user)
    res.header("authorization", accesToken).json({
        message: "usuario autenticado",
        token: accesToken
    })
})


function generateAccessToken(user){
    return jwt.sign(user, process.env.SECRET, {expiresIn: "1m"})
}

function validateToken(req, res, next){
    const accesToken = req.headers["autorizacion"] || req.query.accesToken
    if(!accesToken) res.send("acceso denegado")

    jwt.verify(accesToken, process.env.SECRET, (err, user) => {
        if (err){
            res.send("Acceso denegado, token expirado o incorrecto")
        }else{
            req.user = user
            next()
        }
    })
}


app.listen(port, () =>{
    console.log(`server in the runing on port: ${port}`);
})

module.exports= app;