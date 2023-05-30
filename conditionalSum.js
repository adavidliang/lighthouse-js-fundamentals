const conditionalSum = function(num, x) {
  let sum = 0;
for (let n of num) {
  if (x == "even") {
    if (n%2 == 0) {
      sum += n;
    }
  } 
  else if (x == "odd") {
    if (n%2 > 0) {
      sum += n;
    }
  }
}
  console.log(sum);
 
}
console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));