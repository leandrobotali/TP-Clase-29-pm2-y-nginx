import express from 'express'

import infoRouter from './src/routes/info.routes.js'
import randomRouter from './src/routes/random.routes.js'

export function createServer({ port = 8080 }) {
    return new Promise((resolve, reject) => {
        const app = express()
        let server
        app.get('/', (req, res, next) => {
            res.send(`proceso '${process.pid}' escuchando en ${server.address().port}`)
        })

        app.use('/info', infoRouter);
        app.use('/api/randoms', randomRouter);

        server = app.listen(port, () => {
            console.log(`proceso '${process.pid}' escuchando en ${server.address().port}`)
            resolve(server)
        })
        server.on('error', reject)
    })
}