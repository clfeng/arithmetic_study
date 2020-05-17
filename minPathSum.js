/**
 * @param {number[][]} grid
 * @return {number}
 */

/*
sub(i, j) = min(sub(i, j + 1), sub(i + 1, j)) + dp[i, j]
*/

// var minPathSum = function(grid) {
//     let rowLen = grid.length;
//     let columnLen = grid[0].length;

//     function sub(i, j) {
//         if (i === rowLen - 1) {
//             let row = grid[i];
//             let sum = 0;

//             for (let k = j; k < row.length; k++) {
//                 sum += row[k];
//             }

//             return sum;
//         }

//         if (j === columnLen - 1) {
//             let sum = 0;
//             for (let k = i; k < rowLen; k++) {
//                 sum += grid[k][j];
//             }

//             return sum;
//         }

//         return Math.min(sub(i, j + 1), sub(i + 1, j)) + grid[i][j];

//     }

//     return sub(0, 0);
// };

// 记忆化搜索
// var minPathSum = function(grid) {
//     let rowLen = grid.length;
//     let columnLen = grid[0] && grid[0].length || 0;

//     let mem = [];

//     for (let i = 0; i < grid.length; i++) {
//         mem.push([]);

//         for (let j = 0; j < grid[i].length; j++) {
//             mem[i].push(-1);
//         }
//     }

//     function sub(i, j) {
//         if (mem[i][j] !== -1) {
//             return mem[i][j];
//         }

//         if (i === rowLen - 1) {
//             let row = grid[i];
//             let sum = 0;

//             for (let k = j; k < row.length; k++) {
//                 sum += row[k];
//             }

//             return mem[i][j] = sum;
//         }

//         if (j === columnLen - 1) {
//             let sum = 0;
//             for (let k = i; k < rowLen; k++) {
//                 sum += grid[k][j];
//             }

//             return mem[i][j] = sum;
//         }

//         return mem[i][j] = Math.min(sub(i, j + 1), sub(i + 1, j)) + grid[i][j];

//     }

//     return sub(0, 0);
// };

// 动态规划
var minPathSum = function (grid) {
    let rowLen = grid.length;
    let columnLen = grid[0] && grid[0].length || 0;
    let mem = [];

    for (let i = rowLen - 1; i >= 0 ; i--) {
        let memRow = [];
        let lastRow = mem[0];

        for (let j = columnLen - 1; j >= 0; j--) {
            if (i === rowLen - 1) {
                if (j === columnLen - 1) {
                    memRow[j] = grid[i][j];
                } else {
                    memRow[j] = memRow[j + 1] + grid[i][j];
                }

            } else {
                if (j === columnLen - 1) {
                    memRow[j] = lastRow[j] + grid[i][j];
                } else {
                    memRow[j] = Math.min(lastRow[j], memRow[j + 1]) + grid[i][j];
                }
            }
        }

        mem.unshift(memRow);
    }

    return mem[0][0];
}
let ret = minPathSum(
    [
        [1,3,1],
        [1,5,1],
        [4,2,1]
    ]
);

console.log(ret);