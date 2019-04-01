/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
    let arr = [];
    let item;

    for (let i = 0; i < nums.length; i++) {
        item = arr.find(num => Math.abs(num - nums[i]) <= t);

        if (typeof item !== 'undefined') {
            return true;
        }

        arr.push(nums[i]);
        
        if (arr.length === k + 1) {
            arr.shift();
        }
    }

    return false;
};