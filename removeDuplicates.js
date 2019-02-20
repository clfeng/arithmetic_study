/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 0; // [0..k] 为最终合法的数组
    for (let i = 1; i < nums.length; i++) {
        nums[i];
        if (nums[i] !== nums[k]) {
            swap(nums, i, ++k);
        }
    }

    nums.length = k + 1;
    return k + 1;
};

function swap(nums, i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}


var removeDuplicates = function(nums) {
    let i = 1;
    while(i < nums.length) {
        if (nums[i] === nums[i - 1]) {
            nums.splice(i, 1);
        } else {
            i++;
        }
    }
};

// 未做 80. Remove Duplicates from Sorted Array II