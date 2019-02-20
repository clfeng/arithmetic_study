/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let k = m - 1; // k用于指定nums1当前比较元素
    let t = n - 1; // t用于指定nums2当前比较元素
    let index = m + n - 1

    while (k >= 0 && t >= 0) {
        if (nums1[k] >= nums2[t]) {
            nums1[index] = nums1[k];
            k--;
        } else {
            nums1[index] = nums2[t];
            t--
        }

        index--;
    }

    while(t >= 0) {
        nums1[t] = nums2[t];
        t--;
    }
};

// 
// [1,2,3,0,0,0]
// 3
// [2,5,6]
// 3
merge([1,2,3,0,0,0], 3, [2,5,6], 3);

// 待完成 215