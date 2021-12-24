const express = require('express')
const path = require('path')
const app = express()
const port = 3000

const { getHoliday, getAscii } = require('./handlers/time.js')

app.get('/', (req, res) => {
  res.send('')
})

app.get('/holiday', (req, res) => {
    const options = {root: path.join(__dirname, '/ascii_art')};
    const file = getHoliday();
    res.sendFile(file, options)
})

app.get('/:keyword', (req, res) => {
  const options = {root: path.join(__dirname, '/ascii_art')};
  const keyword = req.params.keyword;
  const file = getAscii(keyword);
  res.sendFile(file, options)
})

app.listen(port, () => {
  console.log(`Ascii server listening at http://localhost:${port}`)
})