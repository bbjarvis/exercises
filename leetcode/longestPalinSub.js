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
  let longPalin = ''

  if (s.length < 1) return ''

  const checkPalin = (left, right) => {
    for (
      ;
      left >= 0 && right < s.length && s[left] === s[right];
      left--, right++
    ) {}
    left++
    right--
    if (right - left + 1 > longPalin.length) {
      longPalin = s.substring(left, right + 1)
    }
  }

  for (let i = 0; i < s.length; i++) {
    checkPalin(i, i)
    checkPalin(i, i + 1)
  }

  return longPalin
}

for (let x = 0; x < s.length; x++)
  console.log('answer', s[x], n[x], longestPalindrome(s[x]))
