
var fs=require('fs');
module.exports=function(directory, extension, callback){

var reg= new RegExp ('\\.'+extension);
fs.readdir(directory, function(err,list){
	if (err) return callback(err);

    list = list.filter(function (file) {
      return reg.test(file)
    })


	callback(null,list);
	})
}
