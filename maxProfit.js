/**
 * @param {number[]} prices
 * @return {number}
 */

/*
status: 'buy' | 'sell'


f(i, stauts): 基于当前状态去进行买卖得到最大收益
1. status === 'buy'
从i开始考虑买入能达到最大收益

2. status === 'sell'
从i开始考虑卖出能得到最大收益

f(i, status) = {
    if (status === 'buy') { // 考虑买入
        max = Math.max(-1 * prices[i] + f(i + 1, 'sell'), f(i + 1, 'buy'))
    } else if (status === 'sell') { // 考虑卖出
        max = Math.max(prices[i] + f(i + 2, 'buy‘), f(i + 1, 'sell'))
    }
}
*/
// var maxProfit = function(prices) {
//     let len = prices.length;
//     let memo = {};
//     function transaction (index, status) {
//         if (index >= len) {
//             return 0;
//         }

//         if (memo.hasOwnProperty(`${index}-${status}`)) {
//             return memo[`${index}-${status}`]
//         }
        
//         if (status === 'buy') { // 考虑买入
//             return memo[`${index}-${status}`] = Math.max(
//                 -1 * prices[index] +  transaction(index + 1, 'sell'), 
//                 transaction(index + 1, 'buy')
//             );
//         } else { // status === 'sell', 考虑卖出
//             return memo[`${index}-${status}`] = Math.max(
//                 prices[index] + transaction(index + 2, 'buy'), 
//                 transaction(index + 1, 'sell')
//             );
//         }
//     }
//     return transaction(0, 'buy');
// };

// 动态规划
function maxProfit(prices) {
    let len = prices.length;
    if (!len) {
        return 0;
    }

    // 这里是买入和卖出，而不是考虑
    let buys = [-prices[0]]; // 买入
    let sells = [0]; // 卖出

    for (let i = 1; i < len; i++) {
        buys[i % 3] = Math.max(buys[(i - 1) % 3], (i - 2 < 0 ? 0 : sells[(i - 2) % 3]) - prices[i]);
        sells[i % 3] = Math.max(sells[(i - 1) % 3], buys[(i - 1) % 3] + prices[i]);
    }
    return Math.max(buys[(len - 1) % 3], sells[(len - 1) % 3]);
}

let ret = maxProfit(
    [1,2,3,0,2]
);

console.log(ret);