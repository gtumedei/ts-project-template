import { sayHello, sayGoodbye, getFilename, getDirname } from "./utils"

console.log(`NODE_ENV: ${process.env.NODE_ENV}`)
console.log(`__filename: ${getFilename(import.meta.url)}}`)
console.log(`__dirname: ${getDirname(import.meta.url)}`)

sayHello()
await new Promise(r => setTimeout(r, 100))
sayGoodbye()
