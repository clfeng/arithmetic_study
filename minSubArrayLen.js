/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
    if (nums.legnth  === 0) {
        return 0;
    } else if (nums.length === 1) {
        return nums[0] >= s ? 1 : 0;
    } else if (nums[0] >= s) {
        return 1;
    }

    let i = 0;
    let j = 1;
    let sum = nums[0] + nums[1];
    let ret = nums.length + 1;

    while (j < nums.length && i <= j) { //当i === j的时候，表示有一个数已经是大于s的了，那么最小的就是 1 了，无需继续
        if (sum >= s) {
            ret = Math.min(j - i + 1, ret);
            sum -= nums[i];
            i++;
        } else {
            j++;
            sum += nums[j];
        }
    }
    
    
    return ret > nums.length ? 0 : ret;
};


console.log(minSubArrayLen(7, [2,3,1,2,4,3]));