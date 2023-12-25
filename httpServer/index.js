const http = require('http')
const fs = require('fs')

const firstServer = http.createServer((req, res)=>{
    if(req.url === '/favicon.ico') return res.end();
    const data = `${Date.now()} : New Request Received : ${req.url} \n`
    fs.appendFile('log.txt', data, (err, data)=>{
        if(err){
            console.log(err)
        }else{
            console.log('Log Recorded in file.')
        }
    })
    switch(req.url){
        case '/':
            res.end('This is my home page')
            break;
        
        case '/projects':
            res.end('This is my projects page')
            break;
        
        default:
            res.end('404 Not Found');
            break;
    }
})

firstServer.listen(3000, ()=>{
    console.log('Server Started at port 3000.')
})