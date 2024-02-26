// Given a string s, return the longest
// palindromic

// substring
//  in s.

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.

let s = ['babad', 'cbbd']
let n = ['bab', 'bb']

var longestPalindrome = function (s) {
  let count = 0
  for (let i = 0; i < s.length; i++) {
    for (let j = s.length; j > i; j--) {
      if (s[i] === s[j]) {
        count = j - i + 1
        console.log(i, j, count)
      }
    }
  }
  return count
}

for (let x = 0; x < s.length; x++)
  console.log('answer', s[x], n[x], longestPalindrome(s[x]))
