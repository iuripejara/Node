const express =  require ("express");
const { console } = require("node:inspector");
const path = require("node:path");

const app = express();

// array de Email

let listeEmail = [];

// config ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))

// 
app.use(express.static("public"))

// config body
app.use(express.urlencoded({extended: true}))

// pagina do formulario
app.get("/",(req,res) => {
    res.render("form");// nome do arquivo que esta o formulario
})

// envios dos dados
app.post("/register",(req,res) => { // /register <- tem que ser o mesmo do formulario
    
    const Email = req.body.email;

    if (Email) {
        listeEmail.push({email:Email})
        res.redirect("/succes") // <- redireciona 
    }else{
        res.redirect("/")
    }
})

//pag de success
app.get("/succes",(req,res)=>{
    res.render("success")
})

// paginas Users

app.get("/users",(req, res) => {
    res.render("users", { users : listeEmail})
})

// Deleta
app.post("/emails/delete",(req,res) => {
    const { email } = req.body
    listeEmail = listeEmail.filter(item => item.email !== email)
    res.redirect("/users")
})

//Porta
const Port = 3000;

app.listen(Port,()=>{
    console.log(`Servidor http://localhost:${Port}/`)
})

