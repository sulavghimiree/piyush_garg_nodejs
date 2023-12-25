const fs = require('fs');

// fs.writeFileSync('./hello.txt', 'Hello World! This is me')

// fs.writeFile('./hello2.txt', 'Hey Man!', (err)=>{
//     console.log(err)
// })

// const data = fs.readFileSync('hello.txt', 'utf-8')
// console.log(data)

// fs.readFile('hello.txt', 'utf-8', (err, data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })

// fs.appendFileSync('./hello.txt', 'Hello');

// fs.appendFile('./hello.txt', 'Sulav', (err)=>{
//     if(err){
//         console.log(err)
//     }
// })

// fs.mkdirSync('./sulav/a/b', {recursive:true})

console.log(fs.statSync('./hello.txt'))