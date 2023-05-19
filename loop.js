let num = 100;
while (num >= 100 && num <= 200) {
  if(num % 12 === 0) {
    console.log("LoopyLighthouse");
  }
  else if(num % 4 === 0) {
    console.log("Lighthouse");
  }
  else if(num % 3 === 0) {
    console.log("Loopy");
  }
  else {
    console.log(num);
  }
  num++;

}

