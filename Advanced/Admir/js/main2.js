let yesterday = (function(data) {
	let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	let year = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	let day = new Date(data);
	let pozition = day.getDay()-1;
  	return days[pozition]+ " "+ year[day.getMonth()] + " " + (day.getDate()-1) + " " + day.getFullYear();
});

document.write(yesterday("Feb 23, 2017"));
