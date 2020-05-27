function getGrades() {
	let x = document.getElementById("grade").value; // This is the string
	let data = x.split(", "); // This is the new array
	let sum = 0;
	for (i = 0; i < data.length; i++) {
		sum += parseInt(data[i])  // This is sum of array
	}
	let avg = sum/data.length;
	document.getElementById("demo").innerHTML = "Sum: " +sum+ "<br> Average: " +avg; 
}


function promptGrades() {
	let x = prompt("Please enter numbers", ""); // This is the string
	let data = x.split(", "); // This is the new array
	let sum = 0;
	for (i = 0; i < data.length; i++) {
		sum += parseInt(data[i])  // This is sum of array
	}
	let avg = sum/data.length;
	document.getElementById("demo").innerHTML = "Sum: " +sum+ "<br> Average: " +avg; 
}

promptGrades();