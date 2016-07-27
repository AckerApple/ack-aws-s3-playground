var fs = require('fs')
var path = require('path').join(__dirname,'../','src','aaa-test.txt')
var data = fs.readFileSync( path )

require('../putObject')(data, 'aaa-test.txt')