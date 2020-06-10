/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

/*
f(amount) 从coins中选择硬币组成amount面额的最小数量
f(amount) = 
    Math.min(
        1 + f(amount - coins[0]),
        1 + f(amount - coins[1]),
        1 + f(amount - coins[2]),
        1 + f(amount - coins[i]),
        ...,
        1 + f(amount - coins[n]),
    )
临界条件：
amount 0
return 0;

amount > 0
符合递归条件，交给子问题处理

amount < 0
不符合条件，无法拼凑出来

为了能跟-1这种返回值很好的兼容，对正常取值去反一下
如果是2个，返回值是 -2
一个，则返回值是 -1
如果是0个，返回值是-0
如果不符合条件返回值是 1

amount - couns[i] <= 0

// f(index, amount) 从[index, coins[amount.length - 1])


*/ 
// var coinChange = function (coins, amount) {
//     let memo = {};
//     function _coinChange (amount) {
//         if (amount === 0) {
//             return 0;
//         } else if (amount < 0) {
//             return Infinity;
//         }

//         if (memo.hasOwnProperty(amount)) {
//             return memo[amount];
//         }
//         let min = Infinity;

//         for (let i = 0; i < coins.length; i++) {
//             min = Math.min(
//                 min,
//                 1 + _coinChange(amount - coins[i])
//             );
//         }

//         return memo[amount] = min;

//     }

//     let ret = _coinChange(amount)

//     return Number.isFinite(ret) ? ret : -1;
// };

// 动态规划
var coinChange = function (coins, amount) {
    if (amount < 0) {
        return -1;
    } else if (amount === 0) {
        return 0;
    }
    let memo = [];

    for (let i = 0; i <= amount; i++) {
        memo[i] = Infinity;
        for (let j = 0; j < coins.length; j++) {
            let differential = i - coins[j];
            if (differential === 0) {
                memo[i] = Math.min(
                    memo[i],
                    1
                )
            } else if (differential > 0) {
                memo[i] = Math.min(
                    memo[i],
                    1 + memo[differential]
                );
            }
        }       
   }

   return Number.isFinite(memo[amount]) ? memo[amount] : -1;
};

let ret = coinChange(
    [1],
    0
);

console.log(ret);