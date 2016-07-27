const fs = require('fs')

const path0 = require('path').join(__dirname, '../', 'results', 'john-aws-image-result.jpg')

var pTo = '2016-07-27-11-59-02.jpg'

require('../getObject')(pTo,(err,data)=>{
  if(err){
    return console.log(err)
  }

  var write = Buffer.from(data.Body,'base64')
  fs.writeFile(path0, write, 'binary')
})
