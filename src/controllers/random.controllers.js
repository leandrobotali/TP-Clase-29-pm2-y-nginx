import { fork } from 'child_process'

const getRandom= (req,res) => {
    const cant = req.query.cant || 100000000
    const procRandom = fork('./procesoRandom.js')
    procRandom.on('message', resultado => {
        res.json({
            proceso: process.pid,
            result: resultado
        })
    })
    procRandom.send(cant)
} 

export default getRandom