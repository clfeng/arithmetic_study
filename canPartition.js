/**
 * @param {number[]} nums
 * @return {boolean}
 */

/*
1. sum / 2 从nums中选择相应的数字使得其和等于 sum / 2
2. f(i, sum) 
    nums[i] + f(i + 1, sum - nums[i]) ||
    f(i + 1, sum)

*/ 
// var canPartition = function(nums) {
//     let sum = nums.reduce((total, num) => {
//         return total += num;
//     }, 0);
//     let len = nums.length;

//     if (!Number.isInteger(sum / 2)) {
//         return false;
//     }

//     let memo = {};

//     function _canPartition (index, sum) {
//         if (index >= len) {
//             return false;
//         }
//         if (nums[index] === sum) {
//             return true;
//         }
//         if (memo.hasOwnProperty(`${index}-${sum}`)) {
//             return memo[`${index}-${sum}`];
//         }

//         return memo[`${index}-${sum}`] = _canPartition(index + 1, sum - nums[index]) || _canPartition(index + 1, sum);
//     }

//     return _canPartition(0, sum / 2);
// };


// 动态规划
/*
转成 01背包问题来思考，认为每个数字就是物品的重量，且每个物品的平均价值为1
而背包的整体价值最大为 sum / 2，容量为 sum / 2

f(index, sum) 考虑将[index, n)的物品放入到容量为sum的背包中产生最大的价值
f(index, sum) = 
    max(
        nums[index] + f(index + 1, sum - nums[index]),
        f(index + 1, sum)
    )


*/
var canPartition = function(nums) {
    let sum = nums.reduce((total, num) => {
        return total += num;
    }, 0);
    let len = nums.length;
    let halfSum = sum / 2;

    if (!Number.isInteger(halfSum)) {
        return false;
    }

    let memo = [
        [],
        []
    ];

    for (let j = 0; j <= halfSum; j++) {
        if (nums[0] <= j) {
            memo[0][j] = nums[0];
        } else {
            memo[0][j] = 0;
        }
    }

    for (let i = 1; i <= len; i++) {
        for (let j = 0; j <= halfSum; j++) {
            if (nums[i] > j) {
                memo[i % 2][j] = memo[(i - 1) % 2][j];
            } else {
                memo[i % 2][j] = Math.max(
                    memo[(i - 1) % 2][j],
                    nums[i] + (j - nums[i] >= 0 ? memo[(i - 1) % 2][j - nums[i]] : 0)
                )
            }

            if (memo[i % 2][j] === halfSum) {
                return true;
            }
        }
    }
    return memo[len % 2][halfSum] === halfSum;
}

let ret = canPartition(
    [1, 2, 3, 5]
);

console.log(ret);
