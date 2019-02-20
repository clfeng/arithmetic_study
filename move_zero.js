/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let k = 0; // [0, k) 的为非零项

    for (let i = 0; i < nums.length; i++) {
        if (!nums[i]) {
            if (k !== i) {
                swap(nums, k++, i);
            } else {
                k++;
            }
        }
    }
};

function swap(nums, i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}