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
  let longCount = 0
  let start = 0
  const charMap = new Map()

  for (let i = 0; i < s.length; i++) {
    if (charMap.has(s[i])) {
      start = Math.max(start, charMap.get(s[i]) + 1)
    }
    charMap.set(s[i], i)
    longCount = Math.max(longCount, i - start + 1)
  }

  return longCount
}

for (let x = 0; x < s.length; x++)
  console.log('answer', s[x], n[x], lengthOfLongestSubstring(s[x]))
