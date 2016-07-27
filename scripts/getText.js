var fs = require('fs')
var path = require('path').join(__dirname,'../','results','aaa-test-output.txt')


require('../getObject')('aaa-test.txt',(err,data)=>{
  if(err) throw err

  console.log('\x1b[34mwrote file:\x1b[0m '+path)
  console.log( '\x1b[34mcontents-length:\x1b[0m ',data.Body.toString().length )
  require('fs').writeFileSync(path, data.Body)
})