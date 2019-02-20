/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length <= 2) {
        return nums.length;
    }
    let k = 1; // [0...k] 为合法数组（相同数字出现次数少于2）
    for (let i = 2; i < nums.length; i++) {
        if (!(nums[i] === nums[k] && nums[i] === nums[k - 1])) {
            if (i !== k + 1) {
                swap(nums, ++k, i);
            } else {
                k++;
            }
        }
    }

    nums.length = k + 1;

    return nums.length;
};

function swap (nums, i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}


let ret = removeDuplicates([1,2,2]);
// console.log(ret);