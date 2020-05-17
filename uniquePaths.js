/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

/*
i < m, j < n
f(i, j) = f(i + 1, j) + f(i, j + 1)
*/

// 递归的方式
// var uniquePaths = function(m, n) {
//     function _uniquePaths (i, j) {
//         if (i === m - 1) {
//             return 1;
//         }

//         if (j === n - 1) {
//             return 1;
//         }

//         return _uniquePaths(i + 1, j) + _uniquePaths(i, j + 1);

//     }

//     return _uniquePaths(0, 0);
// };

// 记忆化搜索

// var uniquePaths = function(m, n) {
//     let mem = {};
    
//     function _uniquePaths (i, j) {
//         if (i === m - 1) {
//             return 1;
//         }

//         if (j === n - 1) {
//             return 1;
//         }

//         if (mem.hasOwnProperty(`${i}-${j}`)) {
//             return mem[`${i}-${j}`];
//         }

//         return mem[`${i}-${j}`] = _uniquePaths(i + 1, j) + _uniquePaths(i, j + 1);

//     }

//     return _uniquePaths(0, 0);
// };

// 动态规划
var uniquePaths = function(m, n) {
    let mem = [];
    for (let i = m - 1; i >= 0; i--) {
        let curRow = [];
        let lastRow = mem[0];

        for (let j = n - 1; j >= 0; j--) {
            if (i === m - 1) {
                curRow[j] = 1;
                continue;
            }

            if (j === n - 1) {
                curRow[j] = 1;
                continue;
            }

            curRow[j] = curRow[j + 1] + lastRow[j];
        }

        mem.unshift(curRow);
    }

    return mem[0][0];
}


let ret = uniquePaths(7, 3);

console.log(ret);