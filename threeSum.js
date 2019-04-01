/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let l, 
        r,
        set = new Set();

    nums.sort((pre, next) => {
        return pre - next;
    });

    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];

        l = i + 1;
        r = nums.length - 1;
        
        while (l < r) {
            if (nums[l] + nums[r] + element === 0) {
                set.add([nums[l], nums[r], element].sort().toString());
                l++;
                r--;
            } else if (nums[l] + nums[r] + element < 0) {
                l++;
            } else if (nums[l] + nums[r] + element > 0) {
                r--;
            }
        }
    }   
    
    return Array.from(set).map(item => {
        return item.split(',').map(num => Number(num));
    });
};
