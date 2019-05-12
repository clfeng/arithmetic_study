/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    let ret = Number.MAX_SAFE_INTEGER;
    let l, r, diff;
    nums.sort((pre, next) => pre - next)
    for (let i = 0; i < nums.length; i++) {
        l = i + 1;
        r = nums.length - 1;

        while (l < r) {
            if (nums[l] + nums[r] + nums[i] === target) {
                return target;
            } else if (nums[l] + nums[r] + nums[i] < target) {
                diff = target - nums[i] - nums[l] - nums[r];
                ret = Math.abs(diff) < Math.abs(ret) ? diff : ret;
                l++;
            } else {
                diff = target - nums[i] - nums[l] - nums[r];
                ret = Math.abs(diff) < Math.abs(ret) ? diff : ret;
                r--;
            }
        }
    }


    return target - ret;
};

// threeSumClosest([-1, 2, 1, -4], 1);