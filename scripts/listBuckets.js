require('../param-aws-vars')

var AWS = require('aws-sdk')
var s3 = new AWS.S3();

s3.listBuckets(function(err, data) {
  if(err){
    console.log("Error:", err);
  }else {
    for (var index in data.Buckets) {
      var bucket = data.Buckets[index];
      console.log("\x1b[34mBucket:\x1b[0m ", bucket.Name, ' : ', bucket.CreationDate);
    }
  }
})