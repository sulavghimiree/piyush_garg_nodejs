const express = require('express')
const { connectDB } = require('./connection')
const router = require('./routes/url')

const app = express()
const PORT= 3000

app.use(express.json())

connectDB('mongodb://localhost:27017/urlshortDB')

app.use('/api/shorturl', router)

app.listen(PORT, ()=>{
    console.log(`Server Started at PORT: ${PORT}`)
})