const isPalindrome = function(s) {
  //let stringReverse = s.split("").reverse().join("");
  let stringReverse = s.split(" ").join("");
  stringReverse = stringReverse.split("").reverse().join("");
  s = s.split(" ").join("");

  console.log(s, stringReverse)
  return s == stringReverse;
};

module.exports = isPalindrome;


