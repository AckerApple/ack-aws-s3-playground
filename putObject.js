var util = require('util')
require('./param-aws-vars')
var s3 = require('ack-aws-s3-universal')//require('node-s3-encryption-client')
var s3Params = require('./getS3Params')

module.exports = putObject

function putObject(body, path, params={}){
  params.KmsParams = s3Params.KmsParams

  params.Bucket = s3Params.Bucket
  params.Body = body//'{"hello": "world"}'
  params.Key = path//'acker-test.json'//key.KeyId//'arn:aws:kms:us-east-1:609182683673:key/89cc3c54-f8db-4127-a2d9-ab9471f86dd2'/* required */

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

  s3.putObject(params, function(err, data) {
    if (err){
      console.log(util.inspect(err, {colors:true, depth:3}));
    }

    //delete data.Body
    console.log('success!', data);           // successful response
  });
}