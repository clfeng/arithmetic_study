/**
 * @param {number[]} nums
 * @return {number}
 */
/*
dp(i): 从 nums [0, i]的数组组成的最长子序列
dp(i): 
let max = 0;
if (nums[i] > nums[j]) {
    max = Math.max(dp(i), max)
}
return max + 1;

*/
var lengthOfLIS = function(nums) {
    let len = nums.length;

    if (!len) {
        return 0;
    }

    let memo = new Array(len).fill(1);
    let ret = 0;
    
    for (let i = 0; i < len; i++) {
        let max = 0;
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                max = Math.max(max, memo[j])
            }
        }
        memo[i] = max + 1;
        ret = Math.max(ret, memo[i]);
    }

    return ret
};

let ret = lengthOfLIS([0]);

console.log(ret);