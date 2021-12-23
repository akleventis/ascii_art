const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.get('/:key', (req, res) => {
    var options = {root: path.join(__dirname, '/ascii_art')};
    const file;
    switch (req.params.key){
      case 'swag':
        file = 'swag.txt'
        break;
      case 'christmas':
        file = 'christmas.txt'
        break;
      default:
        file = 'bitly.txt'
    }
    res.sendFile(file, options)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})