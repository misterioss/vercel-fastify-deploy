import fastify from 'fastify'
const index = fastify()

index.get('/ping', () => 'pong 🏓')
await index.ready()
console.log(index.printRoutes())
await index.listen()
