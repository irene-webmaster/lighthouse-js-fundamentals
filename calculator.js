function ageCalculator(name, yearOfBirth, currentYear) {
  var realAge = currentYear - yearOfBirth;
  return name + " is " + realAge + " years old.";
}

console.log(ageCalculator("Suzie", 1983, 2015));
console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));