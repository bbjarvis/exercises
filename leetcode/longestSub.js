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

let s = ['abcabcbb', 'bbbbb', 'pwwkew', '']

var lengthOfLongestSubstring = function (s) {
  let count = 1
  let longCount = 1
  if (s.length === 0) longCount = 0
  else {
    for (let i = 0; i < s.length; i++) {
      for (let j = i + 1; j < s.length; j++) {
        console.log(s[i], s[j])
        if (s[i] === s[j]) {
          longCount = count
          console.log('break', count, longCount)
          break
        } else {
          count = j - i + 1
          if (count > longCount) longCount = count

          console.log('counting', count, longCount)
        }
      }
    }
  }
  return longCount
}
for (let x = 0; x < s.length; x++) console.log(lengthOfLongestSubstring(s[x]))
