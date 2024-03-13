// Regular Expression Matching

// Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

// '.' Matches any single character.​​​​
// '*' Matches zero or more of the preceding element.
// The matching should cover the entire input string (not partial).

// Example 1:

// Input: s = "aa", p = "a"
// Output: false
// Explanation: "a" does not match the entire string "aa".
// Example 2:

// Input: s = "aa", p = "a*"
// Output: true
// Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
// Example 3:

// Input: s = "ab", p = ".*"
// Output: true
// Explanation: ".*" means "zero or more (*) of any character (.)".

// Constraints:

// 1 <= s.length <= 20
// 1 <= p.length <= 20
// s contains only lowercase English letters.
// p contains only lowercase English letters, '.', and '*'.
// It is guaranteed for each appearance of the character '*', there will be a previous valid character to match.

/*
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

var isMatch = function (s, p) {
  let isAny = p.includes('.')
  let isZeroOrMore = p.includes('*')

  return isAny && isZeroOrMore
}

let s = ['aa', 'aa', 'ab']
let p = ['a', 'a*', '.*']

let out = [false, true, true]
for (let x = 0; x < s.length; x++)
  out[x] === isMatch(s[x], p[x])
    ? ''
    : console.log('answer', s[x], out[x], isMatch(s[x], p[x]))
