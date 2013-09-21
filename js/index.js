var iosocket = io.connect();
  iosocket.on('message',function(name,message){
	$('showmessage').innerHTML+=name+':'+message+"</br>";
  });	
  iosocket.on('mans',function(mans){
	$('showuser').innerHTML+=mans+"</br>";				  
  });
function onsend(){
	var a=$('sendmessage');
	iosocket.emit('message',a.value);
	a.value='';
	}
function $(x){return document.getElementById(x);}
function onlogin(){
	var name=$('name');
	iosocket.emit('login',name.value);
	$('login').style.display='none';
	$('win').style.display='block';
	}



