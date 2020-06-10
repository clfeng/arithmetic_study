/**
 * @param {number[]} nums
 * @return {number}
 */

/*
不同点在于环形，首位相邻了，其实就0这个位置是否偷取产生了不同的影响
状态方程：
f(i, n - 1): 考虑偷取[i, ..., n - 1]

状态转移方程：
f(i) = Math.max(nums[i] + f(i + 2, n - 1), f(i + 1, n - 1))
特殊的，当 i === 0 时候
转移方程为：
f(0) = Math.max(nums[0] + f(2, n - 2), f(1, n - 1))

另外一种简单版的思考方式是：
成环其实相当与没成环的两中方式的对比
robCircle = Math.max(nums[0] + rob(nums.slice(2, nums.length - 1)), rob(nums.slice(1, nums.length)))



*/
// var rob = function(nums) {
//     let len = nums.length;
//     let memo = {};

//     function tryRob (start, end) {
//         if (start === end) {
//             return nums[start];
//         }

//         if (start > end) {
//             return 0;
//         }

//         if (memo.hasOwnProperty(`${start}-${end}`)) {
//             return memo[`${start}-${end}`];
//         }

//         if (start === 0 && end === len - 1) {
//             return memo[`${start}-${end}`] = Math.max(nums[0] + tryRob(2, end - 1), tryRob(1, end));
//         }


//         return memo[`${start}-${end}`] = Math.max(nums[start] + tryRob(start + 2, end), tryRob(start + 1, end));

//     } 

//     return tryRob(0, len - 1);
// };

// 动态规划
var rob = function(nums) {
    let len = nums.length;
    let memo = [];
    let max = 0;

    if (!len) {
        return 0;
    }

    // 确定偷 0
    for(let i = len - 2; i > 1; i--) {
        if (i === len - 2) {
            memo[i] = nums[i];
            continue;
        }

        memo[i] = Math.max(nums[i] + (i + 2 > len - 2 ? 0 : memo[i + 2]), memo[i + 1])
    }

    max = (memo[2] || 0) + nums[0];

    // 确定不偷取 0
    for(let i = len - 1; i > 0; i--) {
        if (i === len - 1) {
            memo[i] = nums[i];
            continue;
        }

        memo[i] = Math.max(nums[i] + (i + 2 > len - 1 ? 0 : memo[i + 2]), memo[i + 1])
    }

    max = Math.max(max, (memo[1] || 0));

    return max;
}


let ret = rob([1,2,3,1]);

console.log(ret);