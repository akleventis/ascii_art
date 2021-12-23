const express = require('express')
const path = require('path')
const app = express()
const port = 3000

const getHoliday = require('./utils/time.js')

app.get('/', (req, res) => {
    var options = {root: path.join(__dirname, '/ascii_art')};
    const holiday = getHoliday();
    res.sendFile(holiday, options)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})