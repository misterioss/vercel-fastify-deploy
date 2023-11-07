import fastify from 'fastify'

(async () => {
    const server = fastify()

    server.get('/ping', () => 'pong 🏓')
    await server.ready()
    console.log(server.printRoutes())
    await server.listen({port: 3000})

    console.log('Server is listening')
})()
