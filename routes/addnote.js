const {Router} = require('express')
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
const notesbase = require('../mocks/notesbase')

const router = Router()

router.options('/', async (req, res) => {
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin, Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.send()
})

router.post('/', jsonParser, (req, res) => {
    var newNote = req.body
    console.log(newNote)
    if (!newNote.Id || 0 === newNote.Id.length || !newNote.Date || 0 === newNote.Date.length) {
        console.log('Некорректный ввод!')
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.json({"Status": "INPUT_BAD"})
    }
    else{
        try{
            notesbase.push({
                Id: newNote.Id,
                Date: newNote.Date,
                Note: newNote.Note
            })

            res.setHeader('Access-Control-Allow-Origin', '*')
            res.json({"Status": "OK"})
        }
        catch(e){
            res.setHeader('Access-Control-Allow-Origin', '*')
            res.json({"Status": "DB_BAD"})
        }
            
    }
    console.log(res.body)
})

module.exports = router