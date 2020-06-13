/**
 * @param {number[]} nums
 * @return {number}
 */

/*
up[i] 记录i结尾，从子序列的上一个数到nums[i]为上升
down[i] 记录i结尾，从子序列到上一个数到nums[i]为下降
*/
// var wiggleMaxLength = function (nums) {
//     let len = nums.length;
//     if (len <= 1) {
//         return len;
//     }

//     let ups = new Array(len).fill(1);
//     let downs = new Array(len).fill(1);

//     for (let i = 0; i < len; i++) {
//         for (let j = i - 1; j >= 0; j--) {
//             if (nums[i] > nums[j]) {
//                 ups[i] = Math.max(ups[i], downs[j] + 1);
//             } else if (nums[i] < nums[j]) {
//                 downs[i] = Math.max(downs[i], ups[j] + 1);
//             }
//         }
//     }

//     return Math.max(ups[len - 1], downs[len - 1])
// };

// var wiggleMaxLength = function (nums) {
//     let len = nums.length;
//     if (!len) {
//         return 0;
//     }

//     // 考虑nums从[0, i]的摆动序列，且其结尾为上升序列的最长子序列
//     let ups = [1];

//     // 考虑nums从[0, i]的摆动序列，且其结尾为下降序列的最长子序列
//     let downs = [1];

//     for (let i = 1; i < len; i++) {
//         if (nums[i] > nums[i - 1]) {
//             ups[i] = downs[i - 1] + 1;
//             downs[i] = downs[i - 1];
//         } else if (nums[i] < nums[i - 1]) {
//             downs[i] = ups[i - 1] + 1;
//             ups[i] = ups[i - 1];
//         } else {
//             downs[i] = downs[i - 1];
//             ups[i] = ups[i - 1];
//         }
//     }
//     return Math.max(ups[len - 1], downs[len - 1]);
// }
var wiggleMaxLength = function (nums) {
    let len = nums.length;
    if (!len) {
        return 0;
    }

    // 考虑nums从[0, i]的摆动序列，且其结尾为上升序列的最长子序列
    let ups = [1];

    // 考虑nums从[0, i]的摆动序列，且其结尾为下降序列的最长子序列
    let downs = [1];

    for (let i = 1; i < len; i++) {
        if (nums[i] > nums[i - 1]) {
            ups[i % 2] = downs[(i - 1) % 2] + 1;
            downs[i % 2] = downs[(i - 1) % 2];
        } else if (nums[i] < nums[i - 1]) {
            downs[i % 2] = ups[(i - 1) % 2] + 1;
            ups[i % 2] = ups[(i - 1) % 2];
        } else {
            downs[i % 2] = downs[(i - 1) % 2];
            ups[i % 2] = ups[(i - 1) % 2];
        }
    }
    return Math.max(ups[(len - 1) % 2], downs[(len - 1) % 2]);
}
let ret = wiggleMaxLength([1,17,5,10,13,15,10,5,16,8]);

console.log(ret);