/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

/*
dp(index, m, n): 从[index, len)中找到能组成 m个0，n个1的最大字符串数
dp(index, m, n) = 
    Math.max(
        1 + dp(index + 1, m - mstr, n - nstr),
        dp(index + 1, m, n)
    )
临界条件
m === 0 &&  n === 0, 返回 0
m < 0 || n < 0 应该跳过这个字符串
*/
// var findMaxForm = function (strs, m, n) {
//     let len = strs.length;
//     let memo = {};

//     function dp(index, subm, subn) {
//         if (index >= len) {
//             return 0;
//         }
//         if (subm === 0 && subn === 0) {
//             return 0;
//         }

//         if (memo.hasOwnProperty(`${index}-${subm}-${subn}`)) {
//             return memo[`${index}-${subm}-${subn}`];
//         }

//         let str = strs[index];
//         let str0Len = str.split('').filter(item => item === '0').length;
//         let str1Len = str.length - str0Len;
//         let max = dp(index + 1, subm, subn);

//         if (subm - str0Len >= 0 && subn - str1Len >= 0) {
//             max = Math.max(
//                 max, 
//                 1 + dp(index + 1, subm - str0Len, subn - str1Len)   
//             )
//         }

//         return memo[`${index}-${subm}-${subn}`] = max;
//     }

//     return dp(0, m, n)
// };


var findMaxForm = function (strs, m, n) {
    let memo = {};
    let len = strs.length;

    for (let i = 0; i < len; i++) {
        let str = strs[i];
        let { length } = str;
        let str0Len = str.replace(/1/g, '').length;
        let str1Len = length - str0Len;

        for (let j = m; j >= str0Len; j--) {
            for (let k = n; k >= str1Len; k--) {
                memo[`${j}-${k}`] = Math.max(
                    (memo[`${j}-${k}`] || 0),
                    1 + (memo[`${j - str0Len}-${k - str1Len}`] || 0)
                );
            }
        }

    }

    return memo[`${m}-${n}`] || 0;
}

var findMaxForm = function (strs, m, n) {
    let len = strs.length;
    const dp = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0))

    for (let i = 0; i < len; i++) {
        let str = strs[i];
        let { length } = str;
        let str0Len = str.replace(/1/g, '').length;
        let str1Len = length - str0Len;

        for (let j = m; j >= str0Len; j--) {
            for (let k = n; k >= str1Len; k--) {
                dp[j][k] = Math.max(
                    dp[j][k],
                    1 + dp[j - str0Len][k - str1Len]
                )
            }
        }

    }

    return dp[m][n];
}

// const getZeroOne = (str) => {
//     const { length } = str
//     const zero = str.replace(/1/g, '').length
//     return {
//         zero,
//         one: length - zero
//     }
// }
// /**
//  * @param {string[]} strs
//  * @param {number} m
//  * @param {number} n
//  * @return {number}
//  */
// const findMaxForm = function (strs, m, n) {
//     const dp = Array(n + 1).fill(0).map(() => Array(m + 1).fill(0))
//     for (let i = 0; i < strs.length; i++) {
//         const { zero, one } = getZeroOne(strs[i])
//         for (let j = n; j >= one; j--) {
//             for (let k = m; k >= zero; k--) {
//                 dp[j][k] = Math.max(dp[j - one][k - zero] + 1, dp[j][k])
//             }
//         }
//     }
//     return dp[n][m]
// }

let ret = findMaxForm(
    ["10", "0001", "111001", "1", "0"],
    5,
    3
)

console.log(ret);