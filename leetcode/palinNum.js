// Given an integer x, return true if x is a
// palindrome
// , and false otherwise.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Constraints:

// -231 <= x <= 231 - 1

/*
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {
  let pal = 0
  if (x === 0) return true
  if (x < 0 || x % 10 === 0) return false
  let xLength = x === 0 ? 1 : Math.floor(Math.log10(Math.abs(x))) + 1
  let xMod = x

  for (let i = 0; i < xLength; i++) {
    pal += (xMod % 10) * 10 ** i
    xMod -= xMod % 10
    xMod /= 10
  }
  return pal === x ? true : false
}
let s = [212, 121, -121, 10]

let out = [true, true, false, false]
for (let x = 0; x < s.length; x++)
  console.log('answer', s[x], out[x], isPalindrome(s[x]))
