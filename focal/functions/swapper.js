// simplify version
const swapper = function (key1, object1, key2, object2) {
  console.log("Swap!");

  if (key1 in object1 && key2 in object2) {
    const temp = object1[key1];
    object1[key1] = object2[key2];
    object2[key2] = temp;
  }

  console.log("object1: ", object1);
  console.log("object2: ", object2);
};

swapper("a", { a: 1, b: 2, c: 3 }, "c", { a: 4, b: 3, c: 5 });
swapper("b", { a: 8, b: 7, c: 6 }, "d", { a: 5, b: 1, c: 2, d: 12 });
swapper("c", { a: 1, b: 3, c: 3, d: 7 }, "c", { a: 4, b: 0, c: 5 });
/**Swap!
object1: { a: 5 , b: 2, c: 3 }
object2: { a: 4, b: 3, c: 1 }
Swap!
object1: { a: 8 , b: 12, c: 6 }
object2: { a: 5, b: 1, c: 2, d: 7}
Swap!
object1: { a: 1 , b: 3, c: 5, d: 7 }
object2: { a: 4, b: 0, c: 3 } */


/* old version:
const swapper = function (key1, object1, key2, object2) {
  console.log("Swap!");
  const container1 = [];
  const container2 = [];
  // Put your solution here
  for (let a in object1) {
    if (a === key1) {
      for (let b in object2) {
        if (b === key2) {
          container1.push(object1[a]);
          container2.push(object2[b]);
          object1[a] = container2[0];

          object2[b] = container1[0];
        }
      }
    }
  }
  console.log("object1: ", object1);
  console.log("object2: ", object2);
};

swapper("a", { a: 1, b: 2, c: 3 }, "c", { a: 4, b: 3, c: 5 });
swapper("b", { a: 8, b: 7, c: 6 }, "d", { a: 5, b: 1, c: 2, d: 12 });
swapper("c", { a: 1, b: 3, c: 3, d: 7 }, "c", { a: 4, b: 0, c: 5 });
*/
/**Swap!
object1: { a: 5 , b: 2, c: 3 }
object2: { a: 4, b: 3, c: 1 }
Swap!
object1: { a: 8 , b: 12, c: 6 }
object2: { a: 5, b: 1, c: 2, d: 7}
Swap!
object1: { a: 1 , b: 3, c: 5, d: 7 }
object2: { a: 4, b: 0, c: 3 } */