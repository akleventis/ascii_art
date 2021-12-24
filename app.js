const express = require('express')
const path = require('path')
const app = express()
const port = 3000

const getHoliday = require('./utils/time.js')

app.get('/holiday', (req, res) => {
    var options = {root: path.join(__dirname, '/ascii_art')};
    let file = getHoliday();
    if (file==='') file = 'bitly.txt'
    res.sendFile(file, options)
})

app.get('/:keyword', (req, res) => {

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})