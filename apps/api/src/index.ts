import { Hono } from 'hono'

export type Env = {}

export const app = new Hono<Env>()

app.get("/", c => c.json({message: "Hello World"}))

app.fire()
