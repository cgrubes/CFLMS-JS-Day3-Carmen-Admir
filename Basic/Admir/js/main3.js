function ageCalculator(birthYear) {
	let currentYear = new Date()
	currentYear = currentYear.getFullYear()
   let age =  currentYear - birthYear;
   let newage = currentYear - birthYear -1;
   return [age, newage];
}

    document.write("You are either ", ageCalculator(1991)[0], " or ", ageCalculator(1991)[1]);

    