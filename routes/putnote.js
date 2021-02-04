const {Router} = require('express')
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
const notesbase = require('../mocks/notesbase')

const router = Router()

router.options('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin, Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS')
    res.send()
})

router.put('/', jsonParser, async (req, res) => {
    var putNote = req.body
    if (!putNote.Id || 0 === putNote.Id.length || !putNote.Date || 0 === putNote.Date.length) {
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.json({"Status": "INPUT_BAD"})
    }
    else{
        try{
            notesbase.find(x => x.Id == putNote.Id).Date = putNote.Date
            notesbase.find(x => x.Id == putNote.Id).Note = putNote.Note

            res.setHeader('Access-Control-Allow-Origin', '*')
            res.json({"Status": "OK"})
        }
        catch(e){
            res.setHeader('Access-Control-Allow-Origin', '*')
            res.json({"Status": "DB_BAD"})
        }
            
    }
})

module.exports = router