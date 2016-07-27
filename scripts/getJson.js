var fs = require('fs')
var path = require('path').join(__dirname,'../','results','ack-json-test.json')


require('../getObject')('ack-json-test.json',(err,data)=>{
  if(err) throw err

  console.log('\x1b[34mwrote file:\x1b[0m '+path)
  console.log( '\x1b[34mcontents-length:\x1b[0m ',data.Body.toString().length )
  require('fs').writeFileSync(path, data.Body)
})