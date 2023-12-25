const fs = require('fs')

function logReqRes(filename){
    return (req, res, next) =>{
        if(req.url === '/favicon.ico'){
            return res.end()
        }
        fs.appendFile('log.txt', `${req.url} | ${req.method} | ${req.ip} \n` , (err)=>{
            if(err){
                res.send('Error')
            }
        })
        next()
    }
}

module.exports = {
    logReqRes
}