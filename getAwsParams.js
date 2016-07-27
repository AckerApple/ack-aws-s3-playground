var path = require('path')
var awsParamsPath = path.join(__dirname,'aws-params.js')
var fs = require('fs')

function createDefaultFile(){


  var defaultJson = `{
  accessKeyId: '',
  secretAccessKey: '',
  region: 'us-east-1'
}`

  var defaultJs= `module.exports = ${defaultJson}`

  fs.writeFileSync(awsParamsPath, defaultJs)
}

try{
  var awsParams = require('./aws-params.js')
}catch(e){
  if(e.code=='MODULE_NOT_FOUND'){
    createDefaultFile()
  }
}

if(!awsParams || !awsParams.accessKeyId || !awsParams.secretAccessKey || !awsParams.region){
  console.log('\x1b[31mPlease ensure '+awsParamsPath+' contains proper values\x1b[0m')
  process.exit()
}

module.exports = awsParams