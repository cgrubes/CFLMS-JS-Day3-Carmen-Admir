function ageCalculator(birthYear, currentYear) {
   let age =  currentYear - birthYear;
   let newage = currentYear - birthYear -1;
   return [age, newage];
}

    document.write("You are either ", ageCalculator(1991, 2020)[0], " or ", ageCalculator(1991, 2020)[1]);

    