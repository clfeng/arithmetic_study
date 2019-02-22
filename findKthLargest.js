/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/* var findKthLargest = function (nums, k) {
    let curStart = 0; //当前排序数组的其实坐标
    let curEnd = nums.length - 1; // 当前需要排序数组的结束坐标

    let lt; // [0...lt] 小于等于标定元素的数组
    let gt; // [gt.. n] 大于标定元素的数组
    let ele;
    let i;

    while (true) {
        gt = curEnd + 1;
        lt = curStart - 1;
        ele = nums[curStart];
        i = curStart + 1;

        while(i !== gt) {
            if (nums[i] <= ele) {
                nums[++lt] = nums[i++]
            } else {
                swap(nums, i, --gt);
            }
        }

        nums[i - 1] = ele;

        if (curEnd - gt + 1 === k - 1) {
            return ele;
        } else if (curEnd - gt + 1 < k - 1) {
            k = k - (curEnd - gt + 1) - 1;
            curEnd = lt;
        } else if (curEnd - gt + 1 > k - 1) {
            curStart = gt;
        }
    }

};

function swap (nums, i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
} */

// [3,2,1,5,6,4] and k = 2


var findKthLargest = function (nums, k) {
    let arr = Array.apply(null, {length: k});
    arr.forEach((item, index) => {
        arr[index] = nums[index];
    });
    sort(arr);

    for (let i = k; i < nums.length; i++) {
        if (nums[i] > arr[0]) {
            arr[0] = nums[i];
            sort(arr);
        }
    }

    return arr[0];
}

function sort(arr) {
    arr.sort((pre, next) => {
        return pre - next;
    });
}

console.log(findKthLargest([2,1], 2));
