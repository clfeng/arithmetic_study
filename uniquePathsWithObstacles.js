/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */

/*

m, n => obstacleGrid

f(i, j) = f(i + 1, j)? + f(i, j + 1)?
f(m - 2, n - 1) = 1;
f(m - 1, n - 2) = 1;
*/
// var uniquePathsWithObstacles = function(obstacleGrid) {
//     if (!obstacleGrid.length) {
//         return 0;
//     }

//     // obstacleGrid 是一个m行，n列的表格
//     let m = obstacleGrid.length;
//     let n = obstacleGrid[0].length;

//     function _uniquePathsWithObstacles (i, j) {
//         if (obstacleGrid[i][j] === 1) {
//             return 0;
//         }

//         if (i === m - 1 && j === n - 1) {
//             return 1;
//         }

//         let ret = 0;
//         if (i + 1 < m) {
//             ret += _uniquePathsWithObstacles(i + 1, j)
//         }
//         if (j + 1 < n) {
//             ret += _uniquePathsWithObstacles(i, j + 1);
//         }

//         return ret;
//     }

//     return _uniquePathsWithObstacles(0, 0);

// };

// 记忆化搜索
// var uniquePathsWithObstacles = function(obstacleGrid) {
//     if (!obstacleGrid.length) {
//         return 0;
//     }

//     // obstacleGrid 是一个m行，n列的表格
//     let m = obstacleGrid.length;
//     let n = obstacleGrid[0].length;
//     let mem = {};

//     function _uniquePathsWithObstacles (i, j) {
//         if (obstacleGrid[i][j] === 1) {
//             return 0;
//         }

//         if (i === m - 1 && j === n - 1) {
//             return 1;
//         }

//         if (mem.hasOwnProperty(`${i}-${j}`)) {
//             return mem[`${i}-${j}`];
//         }

//         let ret = 0;
//         if (i + 1 < m) {
//             ret += _uniquePathsWithObstacles(i + 1, j)
//         }
//         if (j + 1 < n) {
//             ret += _uniquePathsWithObstacles(i, j + 1);
//         }

//         return mem[`${i}-${j}`] = ret;
//     }

//     return _uniquePathsWithObstacles(0, 0);

// };

//  动态规划
var uniquePathsWithObstacles = function(obstacleGrid) {
    if (!obstacleGrid.length) {
        return 0;
    }


    // obstacleGrid 是一个m行，n列的表格
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;

    if (!n) {
        return 0;
    }
    if (obstacleGrid[m - 1][n - 1] === 1) {
        return 0;
    }

    let mem = [];
    for(let i = m - 1; i >=0; i--) {
        let curRow = [];
        let lastRow = mem[0];

        for (let j = n - 1; j >= 0; j--) {
            if (obstacleGrid[i][j] === 1) {
                curRow[j] = 0;
                continue;
            }

            if (i === m - 1 && j === n - 1) {
                curRow[j] = 1;
                continue;
            }

            let ret = 0;
            if (i !== m - 1 ) {
                ret += lastRow[j];
            }

            if (j !== n - 1) {
                ret += curRow[j + 1];
            }

            curRow[j] = ret;
        }

        mem.unshift(curRow);
    }

    return mem[0][0];
};

let ret = uniquePathsWithObstacles(
    [[0,0]]
);

console.log(ret);