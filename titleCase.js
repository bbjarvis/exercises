/*

Title case (or Capital Case) is a specific method of capitalizing the characters of every word in a sentence in order to make it usable as a title or headline.
*/

const titleCase  = function(text) {
  // // Your code in here ...
  let arrText = text.split(' ');

  for (let i = 0; i < arrText.length; i++) {
    arrText[i] = arrText[i].charAt(0).toUpperCase() + arrText[i].slice(1).toLowerCase();
    
  }
  return arrText = arrText.join(' ');
};



// test examples
console.log(titleCase("this is an example")); //should return "This Is An Example"
console.log(titleCase("test")); // should return "Test"
console.log(titleCase("i r cool")); // should return "I R Cool"
console.log(titleCase("WHAT HAPPENS HERE")); // should return "What Happens Here"
console.log(titleCase("")); // should return ""
console.log(titleCase("A")); // should return "A"
