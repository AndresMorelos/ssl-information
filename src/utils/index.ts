import { type } from "os"

export type RequestOptions = {
    host: string,
    port: number,
    path?: string,
    method: string
}

export type OptionsType = {
    host: string,
    port?: number,
    path?: string,
    method?: string
}