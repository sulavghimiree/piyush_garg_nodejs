const express = require('express')

const app = express()

app.get('/', (req, res)=>{
    res.setHeader('X-myName', 'Sulav Ghimire')
    console.log(req.headers)
    res.send('Home Page')
})

PORT = 3000
app.listen(PORT, ()=>{
    console.log(`Server started at port ${PORT}`)
})