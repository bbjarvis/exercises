/*


expected output:
1 1 1 1 
2 2 2 2 
3 3 3 3 
4 4 4 4
----
1 3 5 
2 4 6
----
1 
2 
3 
4 
5 
6 
7
*/

const transpose = function(matrix) {
  //  create empty matrix to fill
  let matrix1 = [];
  // loop through the number of colums
  for (let i = 0; i < matrix[0].length; i++) {
    //  empty array for each row
    let row1 = [];
    //  loop through the number of rows
    for (let j = 0; j < matrix.length; j++) {
      //  push the first one element from each row to row1
      row1.push(matrix[j][i]);
    }
    //  push row1 to the first row of the new matrix
    matrix1.push(row1);
  }
  return matrix1;
};

// Do not edit this function.
const printMatrix = (matrix) => {
    for (const row of matrix) {
        for (const el of row) {
            process.stdout.write(el + " ");
        }
        process.stdout.write('\n')
    }
}

printMatrix(transpose([
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4]
]));

console.log('----')

printMatrix(transpose([
  [1, 2],
  [3, 4],
  [5, 6]
]));

console.log('----')

printMatrix(transpose([
  [1, 2, 3, 4, 5, 6, 7]
]));