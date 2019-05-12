function demo03 (n, nums) {
    // 语言中数组中元素的坐标是从0开始的，题目要求是中1开始

    let ret = [];

    for (let i = 1; i < nums.length; i++) {
        let min = Math.abs(nums[i - 1] - nums[i]); //题目中要求的最小值, 初始最小值取得 nums[i - 1] - nums[i]的绝对值
        let minJ = i - 1;  // 题目中要求的j的脚标，对应的初始的最小角标取 i - 1

        for (let j = i - 2; j >= 0; j--) { // i - 1前面已经用了，所以剩下的就是往前遍历去找有没更小的值
            if (Math.abs(nums[i] - nums[j]) <= min) {
                minJ = j;
                min = Math.abs(nums[i] - nums[j]);
            }
        }

        ret.push([min, minJ + 1]); // 找到的j的角标要+1处理，因为题目要求的其实角标跟语言中数组的角标差值是1
    }

    return ret;

}