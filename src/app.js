import ackS3 from "ack-aws-s3-universal"

console.log('ackS3',ackS3)



//app.js


var s3Params = {
  Bucket:'cod-pillbox'
  //,region:'us-east-1'
  ,KmsParams:{
    KeyId:''
    ,KeySpec: 'AES_256'
  }
}

ackS3.AWS.config.update({
  accessKeyId: ''
  ,secretAccessKey: ''
  //,region:'us-east-1'
});

ackS3.AWS.config.region = 'us-east-1'

















function putObject2(body, path, params={}, callback){
  params.KmsParams = s3Params.KmsParams

  params.Bucket = s3Params.Bucket
  params.Body = body//'{"hello": "world"}'
  params.Key = path//'acker-test.json'//key.KeyId//'arn:aws:kms:us-east-1:609182683673:key/89cc3c54-f8db-4127-a2d9-ab9471f86dd2'/* required */


  params.Metadata={
    'x-amz-meta-cache-control':"max-age=0"
  }

  //CipherAlgorithm
  //EncryptionContext:'',
  //DecryptedEncoding
  //,CipherAlgorithm: 'AES_256'//AES

  //,ACL: 'private'//private | public-read | public-read-write | authenticated-read | aws-exec-read | bucket-owner-read | bucket-owner-full-control
  //CacheControl: 'STRING_VALUE',
  //ContentDisposition: 'STRING_VALUE',
  //ContentEncoding: 'STRING_VALUE',
  //ContentLanguage: 'STRING_VALUE',
  //,ContentLength: 18
  //ContentMD5: 'STRING_VALUE',
  //,ContentType: 'application/json'
  //Expires: new Date || 'Wed Dec 31 1969 16:00:00 GMT-0800 (PST)' || 123456789,
  //GrantFullControl: 'STRING_VALUE',
  //GrantRead: 'STRING_VALUE',
  //GrantReadACP: 'STRING_VALUE',
  //GrantWriteACP: 'STRING_VALUE',
  //Metadata: {
  //  someKey: 'STRING_VALUE',
  //  /* anotherKey: ... */
  //},
  //RequestPayer: 'requester',
  //SSECustomerAlgorithm: 'STRING_VALUE',
  //SSECustomerKey: new Buffer('...') || 'STRING_VALUE',
  //SSECustomerKeyMD5: 'STRING_VALUE',
  //SSEKMSKeyId: 'STRING_VALUE',
  //,ServerSideEncryption: 'AES256'// | aws:kms
  //StorageClass: 'STANDARD | REDUCED_REDUNDANCY | STANDARD_IA',
  //WebsiteRedirectLocation: 'STRING_VALUE'

  ackS3.putObject(params, callback);
}







function getObject2(path, callback){
  var params = {
    Bucket: s3Params.Bucket, /* required */
    Key: path /* required */
    //
    //IfMatch: 'STRING_VALUE',
    //IfModifiedSince: new Date || 'Wed Dec 31 1969 16:00:00 GMT-0800 (PST)' || 123456789,
    //IfNoneMatch: 'STRING_VALUE',
    //IfUnmodifiedSince: new Date || 'Wed Dec 31 1969 16:00:00 GMT-0800 (PST)' || 123456789,
    //Range: 'STRING_VALUE',
    //RequestPayer: 'requester',
    //ResponseCacheControl: 'STRING_VALUE',
    //ResponseContentDisposition: 'STRING_VALUE',
    //ResponseContentEncoding: 'STRING_VALUE',
    //ResponseContentLanguage: 'STRING_VALUE',
    //ResponseContentType: 'STRING_VALUE',
    //ResponseExpires: new Date || 'Wed Dec 31 1969 16:00:00 GMT-0800 (PST)' || 123456789,
    //SSECustomerAlgorithm: 'STRING_VALUE',
    //SSECustomerKey: new Buffer('...') || 'STRING_VALUE',
    //SSECustomerKeyMD5: 'STRING_VALUE',
    //VersionId: 'STRING_VALUE'
  };

  return ackS3.getObject(params, callback);
}





putObject2('{"hello" :"worlds"}', 'ack-json-test2.json', {}, function(err, data) {
  if (err){
    console.log('put-err',err);return
  }

  console.log('put-success!')

  getObject2('ack-json-test2.json',function(err,data){
    //console.log('err',err)
    //console.log('data', data.Body)
    var x = data.Body
    console.log('data.Body', x)
    
    //x = new Buffer(data.Body,'base64').toString()
  })
})