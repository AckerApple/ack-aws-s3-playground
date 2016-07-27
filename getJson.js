var path = require('path').join(__dirname, 'small-aws-result.json')

require('./getObject')('acker-test.json',(err,data)=>{
  require('fs').writeFileSync(path, data.Body)
  console.log('\x1b[34mwrite-file:\x1b[0m '+path)
})