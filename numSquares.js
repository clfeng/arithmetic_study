/**
 * @param {number} n
 * @return {number}
 */

/*
f(n) = 1 + min(f(n - 1), f(n - 2 * 2), f(n - 3 * 3), ..., f(n - i * i))
*/

// 递归
// var numSquares = function(n) {
//     function _numSquares(n) {
//         if (n === 0) {
//             return 0;
//         }
//         if (n === 1) {
//             return 1;
//         }

//         let min = Infinity;
//         for (let i = 1; i * i <= n; i++) {
//             min = Math.min(min, _numSquares(n - i * i));
//         }

//         return min + 1;
//     }

//     return _numSquares(n);
// };

// 记忆化搜索
var numSquares = function(n) {
    let mem = [];
    function _numSquares(n) {
        if (n === 0) {
            return 0;
        }
        if (n === 1) {
            return 1;
        }

        if (mem.hasOwnProperty(n)) {
            return mem[n];
        }

        let min = Infinity;
        for (let i = 1; i * i <= n; i++) {
            min = Math.min(min, _numSquares(n - i * i));
        }

        return mem[n] = min + 1;
    }

    return _numSquares(n);
};

// 动态规划
var numSquares = function(n) {
    if (n === 0) {
        return 0;
    }

    if (n === 1) { 
        return 1;
    }

    let mem = [0, 1];

    for (let i = 2; i <= n; i++) {
        let min = Infinity;

        for (let j = 1; j * j <= i; j++) {
            min = Math.min(min, mem[i - j * j]);
        }

        mem[i] = min + 1;

    }

    return mem[n];
}


let ret = numSquares(13);

console.log(ret);