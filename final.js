const finalPosition = function(moves) {
  let y = 0;
  let x = 0;
  for (const h of moves) {

    if (h === 'north') {
      y++;
    } else if (h === 'south') {
      y--;
    }
   else if (h === 'east') {
     x++;
   } else if (h === 'west') {
     x--;
   }

  }
  return [x, y];

}
