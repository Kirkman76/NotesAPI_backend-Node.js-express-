const express = require('express')

const allNotesRouter = require('./routes/allnotes')
const oneNoteRouter = require('./routes/onenote')
const addNoteRouter = require('./routes/addnote')
const putNoteRouter = require('./routes/putnote')
const delNoteRouter = require('./routes/delnote')

app = express()

app.use('/allnotes', allNotesRouter)
app.use('/onenote', oneNoteRouter)
app.use('/addnote', addNoteRouter)
app.use('/putnote', putNoteRouter)
app.use('/delnote', delNoteRouter)

const PORT = process.env.PORT || 3000

function start(){
    try{
        app.listen(PORT, () => {
                console.log('Server is running on port ' + PORT)
            })

    }
    catch(e){
        console.log(e)
    }
}

start()