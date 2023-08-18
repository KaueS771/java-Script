const express = require("express")
const app = express()
app.use(express.json())

app.get("/", function(req,res){
    res.send("Seja Bem vindo")
})
app.get("/cliente", function(req,res){
    res.send("robson")
})



app.listen(3004, () => {
    console.log('rodando')


})