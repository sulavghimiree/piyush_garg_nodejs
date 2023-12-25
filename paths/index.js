const http = require('http')
const fs = require('fs')
const url = require('url')

const myHttpServer = http.createServer((req, res)=>{
    if(req.url === '/favicon.ico') return res.end()
    const data = `${Date.now()}: New Request Created: ${req.url} \n`
    const myUrl = url.parse(req.url, true)
    console.log(myUrl)
    fs.appendFile('log.txt', data, ()=>{
        console.log('Log Created Successfully')
    })
    switch(myUrl.pathname){
        case '/':
            res.end('This is my home page')
            break

        case '/contacts':
            res.end(`Hi ${myUrl.query.name}`)
            break

        case '/projects':
            res.end('My-Projects')
            break
        
        default:
            res.end('404 Not Found')
    }
})

myHttpServer.listen(3000, ()=>{
    console.log('Server Started at port 3000.')
})