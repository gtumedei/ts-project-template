console.log(`ENV: ${Deno.env.get("ENV")}`)
console.log(`filename: ${import.meta.filename}}`)
console.log(`dirname: ${import.meta.dirname}`)

const sayHello = () => console.log("Hello, World!")
const sayGoodbye = () => console.log("Goodbye, World!")

sayHello()
await new Promise((r) => setTimeout(r, 500))
sayGoodbye()
