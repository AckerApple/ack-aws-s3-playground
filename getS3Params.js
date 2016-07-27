var path = require('path')
var s3ParamsPath = path.join(__dirname,'s3-params.js')
var fs = require('fs')

function createDefaultFile(){


  var defaultJson = `{
  Bucket:'',
  //remove the following IF encryption is NOT required
  KmsParams:{
    KeyId:''//distributed from aws admin console
    ,KeySpec: 'AES_256'//assumed default
  }
}`

  var defaultJs= `module.exports = ${defaultJson}`

  fs.writeFileSync(s3ParamsPath, defaultJs)
}

try{
  var s3Params = require('./s3-params.js')
}catch(e){
  if(e.code=='MODULE_NOT_FOUND'){
    createDefaultFile()
  }
}

if(!s3Params || !s3Params.Bucket){
  throw new Error('\x1b[31mPlease ensure '+s3ParamsPath+' contains proper values\x1b[0m')
}

module.exports = s3Params