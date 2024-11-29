const express = require ("express")
const path = require("node:path")

const app = express()

const storedUser = [];


// config do ejs
app.set("view engine","ejs")
app.set("views", path.join(__dirname,  "views"))

// confg do body
app.use(express.urlencoded({extended: true}))


app.get("/",(req,res) =>{

    const title = "hospedagem"
    const messagem = "mensagem dinamica insirida pelo ejs"
    res.render("index",{title,messagem})
})

app.get("/fomulario",(req,res)=>{
    res.render("form") //nome do arquivo
})
app.post("/register",(req,res) => {

    const Username = req.body.Username
    const password = req.body.password

    storedUser.push({Username, password})

    res.redirect("/users")
})


app.get("/users",(req,res) => {
    res.render("user",{users: storedUser})
})

const Port = 3000;

app.listen(Port,()=>{
    console.log(`servidor http://localhost:${Port}/`)
}) 