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
  let arr = 0
  // console.log(x)
  if (x < 0) return false
  let xLength = x === 0 ? 1 : Math.floor(Math.log10(Math.abs(x))) + 1
  // console.log(x)

  for (let i = 0; i < xLength; i++) {
    console.log(x % 10)

    arr += (x % 10) * (10 * (xLength - i))
    x -= x % 10
    x /= 10
    console.log(x)
    console.log(arr)
  }
  return arr === x ? ture : false
}
let s = [212, 121, -121, 10]

let out = [true, true, false, false]
for (let x = 0; x < s.length; x++)
  console.log('answer', s[x], out[x], isPalindrome(s[x]))
