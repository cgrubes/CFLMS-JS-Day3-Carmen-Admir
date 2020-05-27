function convert(minutes) {
	let hours = Math.floor(minutes/60);
	let reminutes = minutes % 60;
	document.getElementById("demo").innerHTML =  minutes+ " minutes = "+ hours +" hour(s) and "+reminutes+" minute(s)."; 
}

convert(200)

