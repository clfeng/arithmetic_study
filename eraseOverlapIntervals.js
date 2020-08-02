/**
 * @param {number[][]} intervals
 * @return {number}
 */

//  动态规划解法
// var eraseOverlapIntervals = function(intervals) {
//     intervals = intervals.sort((prev, next) => {
//         if (prev[0] !== next[0]) {
//             return prev[0] - next[0];
//         } else {
//             return prev[1] - next[1];
//         }
//     });

//     let memo = new Array(intervals.length).fill(1);

//     for (let i = 1; i < intervals.length; i++) {
//         for (let j = i - 1; j >= 0; j--) {
//             if (intervals[i][0] >= intervals[j][1]) {
//                 memo[i] = Math.max(memo[i], memo[j] + 1);
//             }
//         }
//     }

//     let res = 0;
//     for (let i = 0; i < memo.length; i++) {
//         res = Math.max(memo[i], res);
//     }

//     return intervals.length - res;
// };
var eraseOverlapIntervals = function(intervals) {
    if (intervals.length === 0) {
        return 0;
    }
    intervals = intervals.sort((prev, next) => {
        if (prev[1] !== next[1]) {
            return prev[1] - next[1];    
        } else {
            return prev[0] - next[0];
        }
    });

    let res = 1;
    let prev = 0;
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] >= intervals[prev][1]) {
            res++;
            prev = i;
        }
    }

    return intervals.length - res;
}
// let ret = eraseOverlapIntervals([[1,2],[2,3]]);
// let ret = eraseOverlapIntervals([ [1,2], [2,3], [3,4], [1,3] ]);
let ret = eraseOverlapIntervals( [ [1,2], [1,2], [1,2] ] );

console.log(ret);