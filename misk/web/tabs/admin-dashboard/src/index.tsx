import { createApp, createIndex } from "@misk/core"
import * as Ducks from "./ducks"
import routes from "./routes"
export * from "./containers"

createIndex("admin-dashboard", createApp(routes), Ducks)
