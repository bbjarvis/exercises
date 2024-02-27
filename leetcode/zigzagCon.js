// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);

// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// Example 3:

// Input: s = "A", numRows = 1
// Output: "A"

// Constraints:

// 1 <= s.length <= 1000
// s consists of English letters (lower-case and upper-case), ',' and '.'.
// 1 <= numRows <= 1000

/*
 @param {string} s
 @param {number} numRows
 @return {string}
 */
let s = ['PAYPALISHIRING', 'PAYPALISHIRING', 'A']
let numRows = [3, 4, 1]
let out = ['PAHNAPLSIIGYIR', 'PINALSIGYAHRPI', 'A']

var convert = function (s, numRows) {
  if (numRows === 1) return s
  let zigZag = Object.fromEntries(
    Array.from({ length: numRows }, (_, index) => [index, []])
  )
  for (let index = 0; index < s.length; ) {
    for (let i = 0; i < numRows; i++) {
      if (s[index]) zigZag[i].push(s[index])
      // console.log(index, i, zigZag[i])
      index++
    }
    for (let j = numRows - 2; j > 0; j--) {
      if (s[index]) zigZag[j].push(s[index])
      // console.log(index, j, zigZag[j])
      index++
    }
  }

  return zigZag
}

for (let x = 0; x < s.length; x++)
  console.log('answer', s[x], numRows[x], out[x], convert(s[x], numRows[x]))
