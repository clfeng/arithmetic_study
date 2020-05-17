/**
 * @param {number} n
 * @return {number}
 */
// 1.

var climbStairs = function (n) {
    let ways = [1, 1];
    
    function calcWays (n) {
        if (n === 0) {
            return 1;
        } else if (n === 1) {
            return 1;
        }
    
        if (!ways[n]) {
            ways[n] = calcWays(n - 1) + calcWays(n - 2);
        }
    
        return ways[n];
    }

    return calcWays(n);
}



// 2.
// var climbStairs = function (n) {
//     return calcWays(n)
// }

// function calcWays (n) {
//     let ways = [1, 1, 2];

//     for (let i = 3; i <= n; i++) {
//         ways[i] = ways[i - 1] + ways[i - 2];
//     }

//     return ways[n];
// }

let ret = climbStairs(4);
console.log(ret);