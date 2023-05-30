function judgeVegetable(vegetables, characteristic) {
  let max_value = Number.NEGATIVE_INFINITY;
  let best_vegetable = null;

  for (let i = 0; i < vegetables.length; i++) {
    if (vegetables[i][characteristic] > max_value) {
      max_value = vegetables[i][characteristic];
      best_vegetable = vegetables[i].submitter;
    }
  }

  return best_vegetable;
}


