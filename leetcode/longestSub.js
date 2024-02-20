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

let s = ['abcabcbb', 'bbbbb', 'pwwkew', '', 'cdd', 'abc']
let n = [3, 1, 3, 0, 2, 3]

var lengthOfLongestSubstring = function (s) {
  // const set = new Set(s)
  // const uniques = [...set]
  // if ([0, 1].includes(uniques.length) || uniques.length === s.length) {
  //   longcount = uniques.length
  // } else {
  // count = uniques
  longcount = 0
  let sub = []
  let count = 0

  for (const i of s) {
    sub.push(i)
    subSet = [...new Set(sub)]
    if (sub.length === subSet.length) {
      count++
    } else {
      count = 0
      sub = []
    }
    if (count > longcount) longcount = count
    // console.log(sub, subSet, count, longcount)
  }

  // for (const i of uniques) {
  //   for (const j of s) {
  //     if (i === j) {
  //       count = 1
  //     } else count++
  //     if (count > longcount) longcount = count
  //     console.log(count, i, j, longcount)
  //   }
  // }
  // }

  return longcount

  // let count = 1
  // let longCount = 1
  // if (s.length === 0) longCount = 0
  // else {
  //   for (let i = 0; i < s.length; i++) {
  //     let skipToNext = false
  //     for (let j = i + 1; j < s.length; j++) {
  //       if (skipToNext) break
  //       if (s[i] === s[j]) {
  //         if (count > longCount) longCount = count
  //         break
  //       } else {
  //         for (let index = j - 1; index > i; index--) {
  //           if (s[index] === s[j]) {
  //             skipToNext = true
  //             break
  //           }
  //         }
  //         if (!skipToNext) {
  //           count = j - i + 1
  //           if (count > longCount) longCount = count
  //         }
  //       }
  //     }
  //   }
  // }
  // return longCount
}
for (let x = 0; x < s.length; x++)
  console.log('answer', s[x], n[x], lengthOfLongestSubstring(s[x]))
