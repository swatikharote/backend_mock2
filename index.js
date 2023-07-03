const jsonServer = require("json-server")
const server = jsonServer.create()
const router = jsonServer.router("db.json")
const middlewares = jsonServer.defaults({ noCors: true })

server.use(middlewares)

server.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Headers", "*");
    next()
})
server.use(router)

server.listen(process.env.PORT || 3000, () => {
    console.log('JSON Server is running')
})