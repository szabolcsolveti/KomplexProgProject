var abc = [
"alma"
]
var random = Math.floor((Math.random()*(abc.length-1))); 

var ab = abc[random]; 
var abcde = new Array(ab.length);
var a = 0;


for (var i = 0; i < abcde.length; i++){
	abcde[i] = "_ ";
}


function megjelenites(){
	for (var i = 0; i < abcde.length; i++){
	var vonalak = document.getElementById("vonalak");
	var megjelenit = document.createTextNode(abcde[i]);
	vonalak.appendChild(megjelenit);
	}
}


var reveal= function(){
	var f = document.betuk; 
	var b = f.elements["szoveg"]; 
	var karakter = b.value; 
	karakter = karakter.toUpperCase();
	for (var i = 0; i < ab.length; i++){
		if(ab[i] === karakter){
			abcde[i] = karakter + " ";
			var talalat = true;
		}
	b.value = "";
	}
	

	var vonalak = document.getElementById("vonalak");
	vonalak.innerHTML=""; 
	megjelenites();
	

	if(!talalat){
		var hasznalt= document.getElementById("megjelenit");
		var megjelenit = document.createTextNode(" " + karakter);
		geratenemegjelenitn.appendChild(megjelenit); 
		a++;
	}
	

	var befejezett = true;
	for (var i = 0; i < abcde.length; i++){
		if(abcde[i] === "_ "){
			befejezett = false;
		}
	}
	if(befejezett){
		window.alert("NYERTÉL!");
	}
	

	if(a === 6){
		window.alert("Meghaltál.");
	}
}

function init(){
	megjelenites();
}

window.onload = init;