const chooseStations = function (stations) {
   

  const goodGames = [];

  for (const goodStation of stations) {
    
    if (goodStation[1] >= 20 && (goodStation[2] === "school" || goodStation[2] === "community centre")) {
      goodGames.push(goodStation[0]);
    }
  }
  return goodGames;
}


const stations = [
  ['A', 10, 'school'],
['B', 9, 'restaurant'],
['C', 21, 'community centre'],
['D', 15, 'school'],
['E', 50, 'restaurant'],
['F', 20, 'school'],
['G', 40, 'community centre'],
['H', 50, 'school']
];
chooseStations(stations);


