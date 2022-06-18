// function arrayContainsSum(array, sum) {

//   for (let i = 0; i < array.length; i++) {
//     const element1 = array[i];

//     for (let ii = 0; ii < array.length; ii++) {

//       const element2 = array[ii];

//       if (element1 + element2 === sum) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

const arrayContainsSum = (array, sum) => {
  for (let i = 0; i < array.length; i++) {
    const element1 = array[i];
    for (let ii = 0; ii < array.length; ii++) {
      const element2   = array[ii];
      if (element1 + element2 === sum) {
        return true
      } 
    }
  }
  return false;
}

function arrayContainsSum(array, sum) {
  let i = 0; // 1
  let ii = array.length-1; // 1

  while (i <= ii) { // n + 1

    const element1 = array[i]; // n
    const element2 = array[ii]; // n
    const currentSum = element1 + element2; // n

    if (currentSum === sum) { // n
      return true;
    } else if(currentSum > sum) { // n
      ii--; // n
    } else {
      i++;
    }
  }
  return false; // 1
}