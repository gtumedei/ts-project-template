import { getFilename, getDirname } from "~/esm-utils"

console.log(`NODE_ENV: ${process.env.NODE_ENV}`)
console.log(`__filename: ${getFilename(import.meta.url)}}`)
console.log(`__dirname: ${getDirname(import.meta.url)}`)

const sayHello = () => console.log("Hello, World!")
const sayGoodbye = () => console.log("Goodbye, World!")

sayHello()
await new Promise((r) => setTimeout(r, 100))
sayGoodbye()
