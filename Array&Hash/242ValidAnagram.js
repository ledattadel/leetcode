/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
var isAnagram = function(s, t) {
    const as = {};
    const at = {};
   if(s.length !== t.length){
       return false;
   }
    for(let i = 0; i < s.length; i++){
        as[s[i]] = (as[s[i]] || 0) + 1;
        at[t[i]] = (at[t[i]] || 0) + 1;
    }
    for(let i = 0; i < s.length; i++){
        if(as[s[i]] !== at[s[i]]){
            return false;
        }
    }
    return true
};