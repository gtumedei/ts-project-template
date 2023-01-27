import { fileURLToPath } from "url"

export const sayHello = () => console.log("Hello, World!")
export const sayGoodbye = () => console.log("Goodbye, World!")

export const getFilename = (fileUrl: string) => fileURLToPath(fileUrl)
export const getDirname = (fileUrl: string) => fileURLToPath(new URL(".", fileUrl))
