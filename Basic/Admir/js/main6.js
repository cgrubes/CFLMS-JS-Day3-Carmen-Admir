function product(data) {
	let p = 1;
	for (i = 0; i < data.length; i++) {
		p = p * data[i];
	}
   	return p; 	
}

document.write("The product is: ", product([1, 3, 7, 10, 2]));

    