const express = require('express')

const server = express()

server.get('/',(request,response)=>{
    response.send('servidor express funcionando!\n Você esta página inicial.')
})

server.get("/artigos",(req,res)=>{
    res.send('Você esta na página de artigos.')
})

const Port = 3000
server.listen(Port,()=>{
    console.log(`servidor express iniciado http://localhost:${Port}/`)
})