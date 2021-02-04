const {Router} = require('express')
const notesbase = require('../mocks/notesbase')


const router = Router()

router.get('/', (req, res) => {
    const notes = notesbase
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.send(notes)
})

module.exports = router