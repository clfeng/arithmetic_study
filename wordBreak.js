/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

/*
分析：

f(s) 字典中的单词能否组成s字符串
f(s) = 
inDict(s.slice(0, 1)) && f(s.slice(1)) ||
inDict(s.slice(0, 2)) && f(s.slice(2)) ||
inDict(s.slice(0, i)) && f(s.slice(i)) ||
...



*/

// var wordBreak = function(s, wordDict) {
//     let memo = {};

//     function dp (subStr) {
//         if (!subStr) { // 空字符串直接返回true
//             return true;
//         }

//         if (memo.hasOwnProperty(subStr)) {
//             return memo[subStr];
//         }
//         let len = subStr.length;

//         for (let i = 0; i < len; i++) {
//             let leftStr = subStr.slice(0, i);
//             let rightStr = subStr.slice(i);

//             if (dp(leftStr) && wordDict.includes(rightStr)) {
//                 return memo[subStr] = true;
//             }
//         }

//         return memo[subStr] = false;
//     }

//     return dp(s)
// };


var wordBreak = function(s, wordDict) {
    let memo = [];
    memo[0] = true;
    let wordMemo = {};
    let len = s.length;

    for (let i = 1; i <= len; i++) {
        for (let j = 0; j <= i; j++) {
            let subStr = s.slice(j, i);
            let inDict = false;
            
            if (wordMemo.hasOwnProperty(subStr)) {
                inDict = wordMemo[subStr];
            } else {
                inDict = !!wordDict.includes(subStr);
            }

            memo[i] = memo[i] || !!(memo[j] && inDict);
        }
    }

    return memo[len];
};

let ret = wordBreak("leetcode", ["leet", "code"]);
// let ret = wordBreak("applepenapple", ["apple", "pen"]);
// let ret = wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]);

console.log(ret);