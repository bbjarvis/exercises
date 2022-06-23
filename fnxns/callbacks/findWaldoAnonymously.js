// The second argument/parameter is expected to be a (callback) function
const findWaldo = (names, found) => names.forEach((name, i) => name === "Waldo" ? found(i) : i);

findWaldo(["Alice", "Bob", "Waldo", "Winston"], index => console.log("Waldo is located at: ", index));