/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let set = new Set();
    nums.sort((pre, next) => pre - next);

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j ++) {
            let element = target - nums[i] - nums[j];
            let l = j + 1;
            let r = nums.length - 1;
            
            while( l < r) {
                if (nums[l] + nums[r] === element) {
                    set.add([nums[i], nums[j], nums[l], nums[r]].sort((pre, next) => pre - next).toString());
                    l++;
                    r--;
                } else if (nums[l] + nums[r] < element) {
                    l++;
                } else { //  nums[l] + nums[r] > element
                    r--;
                }
            }
        }        
        
    }
    return Array.from(set).map(item => item.split(',').map(s => Number(s)));
};


// let ret = fourSum([1, 0, -1, 0, -2, 2], 0);
// console.log(ret);