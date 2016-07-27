//arn:aws:kms:us-east-1:609182683673:key/89cc3c54-f8db-4127-a2d9-ab9471f86dd2

var loginConfig = require('./getAwsParams')

process.env.AWS_REGION = loginConfig.region
process.env.AWS_DEFAULT_REGION = loginConfig.region
process.env.AWS_ACCESS_KEY_ID = loginConfig.accessKeyId
process.env.AWS_SECRET_ACCESS_KEY = loginConfig.secretAccessKey

//var AWS = require('aws-sdk')
//AWS.config.update({region: 'us-west-1'})
//AWS.config.update(config)