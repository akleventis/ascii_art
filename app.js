const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    var options = {root: path.join(__dirname)};
    var file = 'art.txt';
    res.sendFile(file, options)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
