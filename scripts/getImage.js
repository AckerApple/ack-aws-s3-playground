const fs = require('fs')

const path = require('path').join(__dirname, '../', 'results', 'small-aws-image-result.jpg')

var pTo = 'small-image.jpg'

require('../getObject')(pTo,(err,data)=>{
  if(err){
    return console.log(err)
  }

  var write = Buffer.from(data.Body,'base64')
  fs.writeFile(path, write, 'binary')
  console.log('\x1b[34mwrote file:\x1b[0m '+path)
})
