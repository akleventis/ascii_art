const express = require('express')
const path = require('path')
const app = express()
const port = 3000

const { getHoliday, getAscii, getRandomFile } = require('./handle/handlers.js')

app.get('/', (req, res) => {
  const options = {root: path.join(__dirname, '/ascii_art')};
  res.sendFile('bitly.txt', options)
})

app.get('/holiday', (req, res) => {
    const options = {root: path.join(__dirname, '/ascii_art')};
    const file = (req.query.date) ? getHoliday(req.query.date) : getHoliday()
    res.sendFile(file, options)
})

app.get('/random', (req, res) => {
  const options = {root: path.join(__dirname, '/ascii_art')};
  const file = getRandomFile();
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

module.exports = app;