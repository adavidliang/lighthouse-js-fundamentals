const ageCalculator = function(name, yearOfBirth, currentYear ) {
  let age = 0;

  if (currentYear >= yearOfBirth){
    age = currentYear - yearOfBirth;

      } else {
    return ("you type wrong");
  }
  return (name + " is " + age + " years old.")
}

//"Suzie is 32 years old."
console.log(ageCalculator("Miranda", 1983, 2015));