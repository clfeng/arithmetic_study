/*
分析：
每个房子都只有两种的可能，偷与不偷，如果偷了就不能去偷相邻的房子
let len = nums.length;

状态方程
f(i): 考虑偷取[i, ..., len - 1] 这些房子的物品的最大价值

状态转移方程
f(i) = max(nums[i] + f(i + 2), f(i + 1))
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
// var rob = function(nums) {
//     let len = nums.length;
//     let memo = [];

//     function tryRob (index) {
//         if (index >= len) {
//             return 0;
//         }

//         if (index === len - 1) {
//             return nums[index];
//         }

//         if (memo.hasOwnProperty(index)) {
//             return memo[index];
//         }

//         return memo[index] =  Math.max(nums[index] + tryRob(index + 2), tryRob(index + 1));
//     }

//     return tryRob(0);
// };

// 动态规划

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let memo = [];
    let len = nums.length;

    if (!len) {
        return 0;
    }

    for (let i = len - 1; i >= 0; i--) {
        memo[i] = Math.max(nums[i] + (i + 2 >= len ? 0 : memo[i + 2]), (i + 1 >= len ? 0 : memo[i + 1]));
    }

    return memo[0];
}


let ret = rob([1,2,3,1]);

console.log(ret);