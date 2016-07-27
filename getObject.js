require('./param-aws-vars')
var s3 = require('node-s3-encryption-client')
var s3Params = require('./getS3Params')

require('./paramResultsPath')

module.exports = getObject

/**
  @callback(err, data{Body})
*/
function getObject(path, callback){
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

  s3.getObject(params, callback);
}
