/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/* 
// Runtime: 76 ms, faster than 22.77% of JavaScript online submissions for Sort Colors.
// Memory Usage: 33.7 MB, less than 65.63% of JavaScript online submissions for Sort Colors.
var sortColors = function (nums) {
    nums.sort((pre, next) => {
        return pre - next;
    });
    return nums;
}; */

// Runtime: 72 ms, faster than 50.00% of JavaScript online submissions for Sort Colors.
// Memory Usage: 33.8 MB, less than 48.44% of JavaScript online submissions for Sort Colors.

/* var sortColors = function (nums) {
    let zero = -1; // [0...zero] => 0
    let two = nums.length; // [two... n-1] => 2

    for (let i = 0; i < two;) {
        if (nums[i] === 0) {
            zero++;
            swap(nums, zero, i);
            i++;
        } else if (nums[i] === 1) {
            i++;
        } else { //nums[i] === 2
            two--;
            swap(nums, two, i);
        }
    }
};

function swap (nums, i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
} */


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/* 
Runtime: 76 ms, faster than 22.77% of JavaScript online submissions for Sort Colors.
Memory Usage: 33.8 MB, less than 34.38% of JavaScript online submissions for Sort Colors.
*/
var sortColors = function (nums) {
    let zero = 0,
        one = 0,
        two = 0;


   for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            zero++;
        } else if (nums[i] === 1) {
            one++;
        } else { //nums[i] === 2
            two++;
        }
   }

   let index = 0;

    while(zero > 0) {
        nums[index++] = 0;
        zero--;
    }

    while(one > 0) {
        nums[index++] = 1;
        one--;
    }

    while(two > 0) {
        nums[index++] = 2;
        two--;
    }
};

