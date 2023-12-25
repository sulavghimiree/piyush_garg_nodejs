const fs = require('fs')
const os = require('os')

// console.log('1')
// const data = fs.readFileSync('./Hello.txt' , 'utf-8')
// console.log(data)
// console.log('2')

// console.log('1')
// fs.readFile('./Hello.txt', 'utf-8', (err, data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })
// console.log('2')
// console.log('3')
// console.log('4')

console.log(os.cpus().length)