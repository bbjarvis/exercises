// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, found) {
  names.forEach((name, i) => name === "Waldo" ? found(i) : i);
};

const actionWhenFound = function(index) {
  console.log(`Found him! At index ${index}`);
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);