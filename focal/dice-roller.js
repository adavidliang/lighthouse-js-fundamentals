const diceroller = function(times) {
  console.log("input the how mnay time you want to roll the dice");
  console.log("rolled" + times + "dice :");
  let d = 0;
  for (let i = 1; i < times; i++) {
    d = Math.floor((Math.random() * 10) + 1);
    console.log(d);
  }
};


console.log(diceroller(3));