const {Router} = require('express')
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
const notesbase = require('../mocks/notesbase')

const router = Router()

router.options('/', async (req, res) => {
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin, Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS')
    res.send()
})

router.delete('/', jsonParser, async (req, res) => {
    var delNote = req.body
    if (!delNote.Id || 0 === delNote.Id.length ) {
        console.log('Некорректный ввод!')
    }
    else{
        try{
            notesbase.splice(notesbase.indexOf(notesbase.find(x => x.Id == delNote.Id)), 1)
            res.setHeader('Access-Control-Allow-Origin', '*')
            res.send();
        }
        catch(e){}
            
    }
})

module.exports = router