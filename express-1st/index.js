const express = require('express')

const app = express()

app.get('/', (req, res)=>{
    res.send('This is my home page! Hello ' + req.query.name + ' and you are '+ req.query.age)
})

app.get('/contact', (req, res)=>{
    res.send('This is my contact page')
})


app.listen(3000, ()=>{
    console.log("Server started at port 3000")
})