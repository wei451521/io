var http=require('http').createServer(onRequest)
,io=require('socket.io').listen(http)
,fs=require('fs');
http.listen(80);
function onRequest(req,res){
	if(req.url=='/'){
		res.writeHead(200,{'Content-Type':'text/plain'});
		res.end(fs.readFileSync(__dirname+'/index.html'));
		}else if(req.url=='/css/style.css'){
		res.writeHead(200,{'Content-Type':'text/plain'})
		res.end(fs.readFileSync(__dirname+'/css/style.css'));
			}else if(req.url=='/js/index.js'){
		res.writeHead(200,{'Content-Type':'text/plain'});
		res.end(fs.readFileSync(__dirname+'/js/index.js'));
			}else if(req.url=='/mge.jpg'){
		res.writeHead(200,{'Content-Type':'text/plain'});
		res.end(fs.readFileSync(__dirname+'/mge.jpg'));
			}
}
io.on('connection',function(socket){

console.log("Connection " + socket.name + " accepted.");
socket.on('message',function(msg){
  console.log('Message Received: ', socket.name,msg);
socket.emit('message',socket.name,msg);
socket.broadcast.emit('message',socket.name,msg); 
});
socket.on('disconnect', function(){
	
        console.log("Connection " + socket.id+ " terminated.");
        socket.leave(socket.name);
    });
socket.on('login',function(name){
		socket.name=name;
		socket.join(socket.name);
socket.broadcast.emit('mans',name); 
		var aa=io.sockets.manager.rooms;
		for(var bb in aa){
			socket.emit('mans',bb.substr(1)); 
			console.log(bb.substr(1));
			}
		});
});