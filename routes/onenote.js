const {Router} = require('express')
const notesbase = require('../mocks/notesbase')

const router = Router()

router.get('/', (req, res) => {
    var id = req.query.id
    const note = notesbase.find(x => x.Id == id)
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.send(note)
})

module.exports = router