/**
 * @param {number[][]} triangle
 * @return {number}
 */
// var minimumTotal = function (triangle) {
//     let dp = [];
//     return dp[0][0];
// };

// let ret = minimumTotal([
//     [2],
//     [3, 4],
//     [6, 5, 7],
//     [4, 1, 8, 3]
// ]);

// console.log(ret);

/*

problem(i, j) = min(sbu(i + 1, j), sub(i + 1, j + 1)) + a[i, j];

定义状态数组
dp[i,j]

DP方程
dp[i,j] = min(dp[i+1,j],dp[i+1][j+1])+dp[i,j]

*/ 

// 递归的方式
// var minimumTotal = function (triangle) {
//     function sub (i, j) {
//         if (i === triangle.length - 2) {
//             return Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]) + triangle[i][j];
//         } else if (i === triangle.length - 1) {
//             return triangle[i][j];
//         }

//         return Math.min(sub(i + 1, j), sub(i + 1, j + 1)) + triangle[i][j];
//     }

//     return sub(0, 0);
// }

// 记忆化搜索
// var minimumTotal = function (triangle) {
//     let mem = [];

//     for (let i = 0; i < triangle.length; i++) {
//         mem.push([]);
//         for (let j = 0; j < triangle[i].length; j++) {
//             mem[i].push(-1);
//         }
//     }

//     function sub (i, j) {
//         if (i === triangle.length - 2) {
//             return Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]) + triangle[i][j];
//         } else if (i === triangle.length - 1) {
//             return triangle[i][j];
//         }

//         if (mem[i][j] === -1) {
//             mem[i][j] = Math.min(sub(i + 1, j), sub(i + 1, j + 1)) + triangle[i][j];
//         }

//         return mem[i][j];
//     }

//     return sub(0, 0);
// }

// 动态规划
// // 自底向上
// var minimumTotal = function (triangle) {
//     let mem = [];

//     for (let i = 0; i < triangle.length; i++) {
//         mem.push([]);
//     }

//     let triangleLen = triangle.length;
//     let lastRow = triangle[triangleLen - 1];
//     let lastMem = [];

//     for (let i = 0; i < lastRow.length; i++) {
//         lastMem.push(lastRow[i]);
//     }

//     mem[triangleLen - 1] = lastMem;

//     for (let i = triangle.length - 2; i >= 0; i--) {
//         for (let j = 0; j < triangle[i].length; j++) {
//             mem[i].push(
//                 Math.min(mem[i + 1][j], mem[i + 1][j + 1]) + triangle[i][j]
//             )
//         }
//     }

//     return mem[0][0];
// }

// 自底向上 --进一步优化空间
var minimumTotal = function (triangle) {
    let mem = [
        [...triangle[triangle.length - 1]]
    ];

    let len = triangle.length;

    for (let i = len - 2; i >= 0; i--) {
        let curRow = [];
        let lastRow = mem[0];

        for (let j = 0; j < triangle[i].length; j++) {
            curRow.push(
                Math.min(lastRow[j], lastRow[j + 1]) + triangle[i][j]
            )
        }

        mem.unshift(curRow);
    }

    return mem[0][0];
}

let ret = minimumTotal([
    [2],
    [3, 4],
    [6, 5, 7],
    [4, 1, 8, 3]
]);

console.log(ret);

