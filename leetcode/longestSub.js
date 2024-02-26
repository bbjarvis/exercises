// Given a string s, find the length of the longest
// substring
//  without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

let s = ['abcabcbb', 'bbbbb', 'pwwkew', '', 'cdd', 'abc', 'aab', 'baa', 'dvdf']
let n = [3, 1, 3, 0, 2, 3, 2, 2, 3]

var lengthOfLongestSubstring = function (s) {
  let start = 0
  let longest = ''

  for (let i = 0; i < s.length; i++) {
    if (s.slice(start, i).includes(s[i])) {
      start = s.indexOf(s[i], start) + 1
    } else if (longest.length < s.slice(start, i + 1).length) {
      longest = s.slice(start, i + 1)
    }
  }

  return longest.length
}

for (let x = 0; x < s.length; x++)
  console.log('answer', s[x], n[x], lengthOfLongestSubstring(s[x]))
