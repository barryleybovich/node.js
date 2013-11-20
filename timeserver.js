var net=require('net');


function addZero(i){
	return (i<10 ? "0":"") +i;
}

function time(){
	var d= new Date();
	return d.getFullYear() + '-'
		+addZero(d.getMonth()+1) + '-'
		+addZero(d.getDate())+' '
		+addZero(d.getHours()) + ':'
		+addZero(d.getMinutes());
}


var server = net.createServer(function(c) {
	c.end(time()+'\n')
});
server.listen(8000);