import fastify from 'fastify'

(async () => {
    console.log('Start server')
    const server = fastify()

    server.get('/ping', () => 'pong 🏓')

    server.get('/ping2', () => {
        console.log('test simple route')

        return server.printRoutes()
    })

    server.get('/', () => {
        console.log('test simple route')

        return server.printRoutes()
    })

    await server.ready()
    console.log(server.printRoutes())
    await server.listen({port: 3000})

    console.log('Server is listening')
})()
