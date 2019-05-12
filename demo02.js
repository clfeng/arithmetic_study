function demo02 (n, a, nums) {
    // 根据分析加猜测，那么丢弃 X1, 要么丢弃Xn

    // 对nums进行从小到大排序（题目中没说是已经排好序的）
    nums.sort(function (pre, next) {
        return pre - next;
    });
    
    // 对于舍弃X1的情况
    // 这种情况下距离为 a到Xn的距离 + Xn到X2的距离
    let ret1 = Math.abs(a - nums[n - 1]) + nums[n - 1] - nums[1];

    // 对于舍弃Xn的情况
    // 这种情况下距离为 a到X1的距离 + Xn到X1的距离
    let ret2 = Math.abs(a - nums[0]) + nums[n - 2] - nums[0];

    // 返回两种情况中最小的
    return Math.min(ret1, ret2);
}