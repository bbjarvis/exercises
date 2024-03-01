// String to Integer (atoi)

// Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).

// The algorithm for myAtoi(string s) is as follows:

// Read in and ignore any leading whitespace.
// Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
// Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
// Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
// If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
// Return the integer as the final result.
// Note:

// Only the space character ' ' is considered a whitespace character.
// Do not ignore any characters other than the leading whitespace or the rest of the string after the digits.

/*
 * @param {string} s
 * @return {number}
 */

let s = [
  '42',
  '   -42',
  '4193 with words',
  'words and 987',
  '+-12',
  '',
  ' ',
  '1',
  '  +  413',
]
let out = [42, -42, 4193, 0, 0, 0, 0, 1, 0]

var myAtoi = function (s) {
  let isNeg = 1
  let num = 0
  let foundDigit = false // Added: Flag to track if a digit has been found.

  for (let i = 0; i < s.length; i++) {
    if (!foundDigit && /^[+-]$/.test(s[i])) {
      // Changed: Ensure signs are considered only before digits.
      if (!/^\d$/.test(s[i + 1])) break // Invalid sequence of '+' or '-', exit.
      if (s[i] === '-') isNeg = -1
      continue // Skip to next iteration after processing sign.
    }
    if (/^\d$/.test(s[i])) {
      foundDigit = true // Set flag when first digit is found.
      num = num * 10 + parseInt(s[i], 10) // Accumulate the number.
    } else if (foundDigit) {
      break // Exit loop if non-digit is found after a digit.
    } else if (!foundDigit && s[i].trim() === '') {
      continue // Ignore leading whitespace before finding digits.
    } else {
      return 0 // Return 0 if non-digit/non-whitespace is found before any digit.
    }
  }

  num *= isNeg // Apply negativity if applicable.
  num = Math.max(Math.min(num, 2147483647), -2147483648) // Clamp the result within the 32-bit signed integer range.

  return num
}

for (let i = 0; i < s.length; i++)
  console.log('answer', s[i], out[i], myAtoi(s[i]))
