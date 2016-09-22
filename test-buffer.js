require('buffer-concat');
 
var b1 = new Buffer('Hello');
var b2 = new Buffer(' world');
var b3 = Buffer.concat([b1, b2]);

console.log(b3.toString());