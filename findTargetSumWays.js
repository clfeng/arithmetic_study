/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */

/*

f(n) = f(n - 1) + f(n - 2)
f(1) = f(0) = 1;
let nums[0] = nums[1] = 1; 
for (let i = 2; i <= n; i++) {
    nums[i] = nums[i - 1] + nums[i - 2]
}



dp(index, S): 从数组nums的index位置以及到len-1进行加减拼接，其求和结果等与S的数量
dp(index, S) = dp(index + 1, S + nums[index]) + dp(index + 1, S - nums[index]);

let len = nums.length;
let memo = new Array(len).fill(-1).map(() => new Map());

for (let i = 0; i < len; i++) {
        
}

边界条件
index === len - 1的时候
if (S === nums[index] || S === -nums[index]) return 1
*/  
// var findTargetSumWays = function(nums, S) {
//     let len = nums.length;
//     let memo = new Array(len).fill(-1).map(() => new Map());

//     function dp (index, sum) {
//         if (index === len - 1) {
//             let count = 0;

//             if (nums[index] + sum === 0) {
//                 count++;
//             }
//             if (nums[index] - sum === 0) {
//                 count++;
//             }
//             return count;
//         }

//         if (memo[index].has(sum)) {
//             return memo[index].get(sum);
//         }

//         let ret = dp(index + 1, sum + nums[index]) + dp(index + 1, sum - nums[index]);
//         memo[index].set(sum, ret);
//         return ret;

//     }

//     return dp(0, S);
// };


let ret = findTargetSumWays([1, 0], 1);
console.log(ret);
