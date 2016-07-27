var fs = require('fs')
var path = require('path')
var resultsPath = path.join(__dirname,'results')

if(!fs.existsSync(resultsPath)){
  console.log('\x1b[34mCreating results path\x1b[0m')
  fs.mkdirSync(resultsPath)
}
