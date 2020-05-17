/**
 * @param {number} n
 * @return {number}
 */
/*
f(n) = max( max(1 * (n - 1), f(n - 1)), max(2 * (n - 2), f(n - 2)), ..., max(i * (n - i), f(n - i)))
*/

// var integerBreak = function(n) {
//     if (n < 2) {
//         throw new Error('n must greater than 1');
//     }

//     let maxs = [];

//     function _integerBreak(n) {
//         let max = 0;

//         if (n === 1) {
//             return 1;
//         }

//         if (maxs.hasOwnProperty(n)) {
//             return maxs[n];
//         }

//         for (let i = 1; i <= n - 1; i++) {
//             max = Math.max(max, i * (n - i), i * _integerBreak(n - i));
//         }

//         return maxs[n] = max;
//     };

//     return _integerBreak(n)
// };

// 动态规划
var integerBreak = function(n) {
    if (n < 2) {
        throw new Error('n must greater than 1');
    }

    let maxs = [0, 1];

    for (let i = 2; i <= n; i++) {
        let max = 0;

        for (let j = 1; j <= i - 1; j++) {
            max = Math.max(max, j * (i - j), j * maxs[i - j]);
        }

        maxs[i] = max;
    }

    return maxs[n];
}

let ret = integerBreak(10);

console.log(ret);