import { sayHello, sayGoodbye } from "./utils"

console.log(`NODE_ENV: ${process.env.NODE_ENV}`)

sayHello()
await new Promise(r => setTimeout(r, 100))
sayGoodbye()
