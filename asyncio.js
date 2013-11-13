var fs=require('fs');
var file=process.argv[2];
var fileRead=fs.readFile(file, 'utf8', function(err,data){
	if (err) throw err;
	console.log(data.split('\n').length-1);

});