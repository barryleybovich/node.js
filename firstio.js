var fs= require ('fs');
var file=process.argv[2];
var fileread=fs.readFileSync(file);

var lines=fileread.toString().split('\n');
console.log(lines.length-1);