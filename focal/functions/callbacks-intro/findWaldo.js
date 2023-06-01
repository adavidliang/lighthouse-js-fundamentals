// The second argument/parameter is expected to be a (callback) function
/*const findWaldo = function(names, found) {
  names.forEach(function(name, index, array) {

    if (name = "Waldo") {

    found(index)  // Your logic to find Waldo goes here

  }});
};*/
const findWaldo = function (names, found) {
  names.forEach((name, index) => {
    if (name === "Waldo") {
      found(index);
    }
  });

};

const actionWhenFound = (index) => console.log(`Found him ${index}!`);


findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);


