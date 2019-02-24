/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let map = {};
    let l = 0;
    let r = -1; //滑动窗口为 -1
    let ret = 0;

    while (r + 1 < s.length) {
        if (map[s[r + 1]] !== 1 ) {
            map[s[++r]] = 1;
        } else {
            map[s[l++]] = 0;
        }
        ret = Math.max(ret, r - l + 1);
    }

    return ret;
};

console.log(lengthOfLongestSubstring("abcabcbb"));