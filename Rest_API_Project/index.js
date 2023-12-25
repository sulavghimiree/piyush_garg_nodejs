const express = require('express')
const dataS = require('./Data.json')
const fs = require('fs')

const app = express()

app.use(express.urlencoded({extended:true}))

app.get('/users', (req, res)=>{
    const html = `
    <ul>
        ${dataS.map((data)=> `<li>${data.first_name}</li>`).join("")}
    </ul>
    `
    return res.send(html)
})

app.route('/api/users').get((req, res)=>{
    return res.json(dataS)
}).post((req,res)=>{
    const body = req.body
    if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.country){
        res.status(400).json({'error': 'field missing'})
    }
    dataS.push({id: dataS.length + 1, ...body})
    fs.writeFile('./Data.json', JSON.stringify(dataS), (err, data)=>{
        res.json({status:'Data Added', ID:dataS.length})
    })
})

app.route('/api/users/:id').get((req,res)=>{
    const id = Number(req.params.id)
    const user = dataS.find((user)=> user.id === id)
    return res.json(user)

}).patch((req, res)=>{
    const id = Number(req.params.id)
    const user = dataS.find((user)=> user.id === id)
    const body = req.body
    const removeUser = dataS.filter((User) => User.ID !== id)
    user.id = id
    user.first_name = body.first_name
    user.last_name = body.last_name
    user.email = body.email
    user.gender = body.gender
    user.country = body.country
    if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.country){
        res.status(400).json({'error': 'field missing'})
    }
    removeUser.push({user})
    fs.writeFile('./Data.json', JSON.stringify(removeUser), (err, data)=>{
        res.status(201).json({status:'Data Updated', ID:id})
    })
    

}).delete((req, res)=>{
    const id = Number(req.params.id)
    const updatedData = dataS.filter((user) => user.id !== id)
    fs.writeFile('./Data.json', JSON.stringify(updatedData), (err, data)=>{
    res.status(201).json({status:'Data Deleted', ID:id})
    })
})

const PORT = 3000
app.listen(PORT, ()=>{
    console.log(`Server started at port: ${PORT}`)
})