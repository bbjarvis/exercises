// 7. Reverse Integer
// Medium
// Topics
// Companies
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21

// Constraints:

// -231 <= x <= 231 - 1

/*
 * @param {number} x
 * @return {number}
 */

let x = [123, -123, 120, 2147483647]
let out = [321, -321, 21, 0]

var reverse = function (x) {
  let rev = 0
  while (x !== 0) {
    let pop = x % 10
    x = Math.trunc(x / 10)

    if (
      rev > Math.trunc(2147483647 / 10) ||
      (rev === Math.trunc(2147483647 / 10) && pop > 7)
    ) {
      return 0
    }
    if (
      rev < Math.trunc(-2147483648 / 10) ||
      (rev === Math.trunc(-2147483648 / 10) && pop < -8)
    ) {
      return 0
    }
    rev = rev * 10 + pop
  }

  return rev
}

for (let i = 0; i < x.length; i++)
  console.log('answer', x[i], out[i], reverse(x[i]))
