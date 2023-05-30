
const sumLargestNumbers = function(num) {
let sum = 0;
  for (let n of num) {
    
 sum += n;
  }
  console.log(sum);
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));