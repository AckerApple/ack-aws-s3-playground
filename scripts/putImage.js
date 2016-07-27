const fs = require('fs')
const fileName = 'small-image.jpg'
const path = require('path').join(__dirname, '../', 'src', fileName)
const img = fs.readFileSync(path)

const imgB = new Buffer(img).toString('base64')

const params = {
  ContentType: 'image/jpeg'
}

require('../putObject')(imgB, fileName, params)
