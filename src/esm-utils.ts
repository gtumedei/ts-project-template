import { fileURLToPath } from "url"

export const getFilename = (fileUrl: string) => fileURLToPath(fileUrl)
export const getDirname = (fileUrl: string) => fileURLToPath(new URL(".", fileUrl))
