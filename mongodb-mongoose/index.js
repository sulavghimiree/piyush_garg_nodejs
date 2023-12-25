const express = require('express')
const mongoose = require('mongoose')
const User = require('./models/users')
const { connectDB } = require('./connection')
const router = require('./routes/users')
const { logReqRes } = require('./middlewares/users')

const app = express()

app.use(express.urlencoded({extended:true}))
app.use(logReqRes('log.txt'))

connectDB('mongodb://localhost:27017/UsersDB')

app.use('/api/users', router)

const PORT = 3000
app.listen(PORT, ()=>{
    console.log(`Server started at port: ${PORT}`)
})