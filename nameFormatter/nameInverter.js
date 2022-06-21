const nameInverter = function(name) {
  if (name === '') {
    return '';
  }
  if (name === undefined) {
    return 'Error';
  }
  let inverted = name.trim();
  if (inverted === "Dr." || inverted === "Mr." || inverted === "Mrs." || inverted === "Ms.") {
    // console.log(inverted)
    return '';
  }
  
  // console.log(inverted)
  if (inverted.includes(' ')) {
    if (inverted.includes("Dr.") || inverted.includes("Mr.") || inverted.includes("Mrs.") || inverted.includes("Ms.")) {
      // console.log(inverted)
      inverted = inverted.split(' ')
      if (inverted.length === 2) {
        inverted = (`${inverted[0]} ${inverted[1]}`)
        return inverted
      }
      inverted = (`${inverted[0]} ${inverted[2]}, ${inverted[1]}`);
      // console.log(inverted)
      return inverted;
    }
    inverted = inverted.split(' ').reverse().join(', ');
    // console.log(inverted)
  }
  // console.log(inverted)


  return inverted;
}

module.exports = nameInverter;