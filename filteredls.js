var fs=require('fs');
var directory=process.argv[2];
var ext=process.argv[3];
var exten= new RegExp('\\.' + ext);
var split=fs.readdir(directory, function(err, array){
	if (err) throw err;
	for (var i = 0; i < array.length; i++) {
		if(exten.test(array[i])){
			console.log(array[i])
		;}
	};
});
