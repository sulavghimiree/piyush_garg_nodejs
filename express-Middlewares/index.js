const express = require('express')
const fs = require('fs')

const app = express()

app.use(express.urlencoded({extended:true}))

app.use((req, res, next)=>{
    if(req.url === '/favicon.ico'){
        return res.end()
    }
    fs.appendFile('log.txt', `${req.url} | ${req.method} | ${req.ip}` , (err)=>{
        if(err){
            res.send('Error')
        }
    })
    next()
})

app.get('/', (req, res)=>{
    res.send('Home Page')
})


const PORT = 3000
app.listen(PORT, ()=>{
    console.log(`Server started at port: ${PORT}`)
})
