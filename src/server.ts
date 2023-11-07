import fastify from 'fastify'
import {getHello} from "./lib/hello.js";

(async () => {

    console.log('ENV TEST:')
    console.log(process.env.ENV_VAR_TEST)
    console.log('-----------------')
    console.log('Start server')
    const server = fastify()

    server.get('/ping', () => 'pong 🏓')

    server.get('/ping2', () => {
        console.log('test simple route')

        return server.printRoutes()
    })

    server.get('/ping3', () => {
        return process.env.ENV_VAR_TEST
    })

    server.get('/ping4', () => {
        return getHello()
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
