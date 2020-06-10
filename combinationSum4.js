/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/*
分析：
// f(index, target): 从nums的[0, index] 的数组组合出target有多少种可能

// f(index, target) = 
//     f(index - 1, target - nums[index] * 0),
//     f(index - 1, target - nums[index] * 1),
//     f(index - 1, target - nums[index] * 2),
//     f(index - 1, target - nums[index] * 3),
//     f(index - 1, target - nums[index] * i)

// let len = nums.length;
xxxx -> 因为是按照无顺序去思考的，所以无法解出来


f(target): 组合成target有多少种方式
    {nums[0]} * f(target - nums[0]),
    {nums[1]} * f(target - nums[1]),
    {nums[2]} * f(target - nums[2]),
    {nums[i]} * f(target - nums[i])


*/
// var combinationSum4 = function(nums, target) {
//     let memo = [];
//    function dp (target) {
//         if (target === 0) {
//             return 1;
//         }
//         if (memo[target]) {
//             return memo[target];
//         }
//         let sum = 0;
//         for (let i = 0; i < nums.length; i++ ) {
//             if (nums[i] <= target) {
//                 sum += dp(target - nums[i]);
//             }
//         }
//         return memo[target] = sum;
//    }

//    return dp(target);
// };
var combinationSum4 = function(nums, target) {
    let memo = [1];

    for (let i = 1; i <= target; i++) {
        memo[i] = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] <= i) {
                memo[i] += memo[i - nums[j]]
            }
        }
    }
    return memo[target];
};

let ret = combinationSum4(
    [1, 2, 3],
    4
);

console.log(ret);