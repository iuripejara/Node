const express = require ("express")

const app =  express()

app.use(express.static('public'))

app.get("/",(req,res) => {
    res.sendFile(__dirname + "/views/index.html")
})

const Port = 3000
app.listen(Port,()=>{
    console.log(`servideor http://localhost:${Port}/`)
})