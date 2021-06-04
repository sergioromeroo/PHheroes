const express = require ("express");
const app = express();
const port = 3030
const path = require("path")//modulo nativo js arma rutas absolutas  q me lleve al views
const views = path.join(__dirname, "views");//dirname muestra en la terminal donde esta mi proyecto c:/desktop... y el views donde quiero entrar y el join arma la ruta
app.use(express.static("public"))//esto es para encontrar los recursos estaticos imagenes de mi pc no hace falta poner /public

app.get("/",(req,res) => res.sendFile(path.join(views, "index.html")))//con esto voy a la raiz de la ruta y mando al home que hay tengo mi msj
app.get("/babbage",(req,res) => res.sendFile(path.join(views, "babbage.html")))
app.get("/berners-lee",(req,res) => res.sendFile(path.join(views, "/berners-lee.html")))
app.get("/clarke",(req,res) => res.sendFile(path.join(views, "clarke.html")))
app.get("/hamilton",(req,res) => res.sendFile(path.join(views, "hamilton.html")))
app.get("/hopper",(req,res) => res.sendFile(path.join(views, "hopper.html")))
app.get("/lovelace",(req,res) => res.sendFile(path.join(views, "lovelace.html")))
app.get("/turing",(req,res) => res.sendFile(path.join(views, "turing.html")))


app.listen(port, () => console.log("servidor corriendo en el puerto: " + port));

//nodemon en la terminal se actualiza en tiempo real mientras hago cambios en el vscode
