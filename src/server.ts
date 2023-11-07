import fastify from 'fastify'
const server = fastify()

server.get('/ping', () => 'pong')
await server.ready()
console.log(server.printRoutes())
server.listen(3000)
