const range = function (start, end, step) {
  let count = [];
  if (start > end || step <= 0 || start === undefined || end === undefined || step === undefined) {
    return [];
  }
  else {
    for (let c = start; c <= end; c += step) {
      count.push(c);
    }
  }
  return count;
}