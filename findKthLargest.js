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


// var findKthLargest = function (nums, k) {
//     let arr = Array.apply(null, {length: k});
//     arr.forEach((item, index) => {
//         arr[index] = nums[index];
//     });
//     sort(arr);

//     for (let i = k; i < nums.length; i++) {
//         if (nums[i] > arr[0]) {
//             arr[0] = nums[i];
//             sort(arr);
//         }
//     }

//     return arr[0];
// }

// function sort(arr) {
//     arr.sort((pre, next) => {
//         return pre - next;
//     });
// }


/*

整体采用类似三路快排的思路
pviot 为随机选取的标定点
lt [0, lt] 为小于 pviot 的数组
gt [gt， len - 1] 为大于 pviot的数组

当满足 lt < nums.length - k < gt 的时候，第k大的数子就是标定点数字
10 

*/

var findKthLargest = function(nums, k) {
    let len = nums.length;
    
    let curStart = 0; // 当前正进行快速排序的数组的开始坐标
    let curEnd = len - 1; // 当前正进行快速排序的数组的结束坐标

    while (true) {
        let lt = curStart - 1; // [curStart, lt] 为小于 pviot 的数组
        let gt = curEnd + 1; // [gt， curEnd] 为大于 pviot的数组
        let pivotIndex = Math.floor(curStart + (curEnd - curStart + 1) * Math.random())
        let pivot = nums[pivotIndex];   // 选取第一项作为标定点
        for (let i = curStart; i < gt;) {
            if (nums[i] < pivot) {
                swap(nums, i, ++lt)
                i++;
            } else if (nums[i] > pivot) {
                swap(nums, i, --gt);
            } else { // nums[i] === pivot
                i++;
            }
        }

        if (lt < len - k && len - k < gt) {
            return pivot;
        } else if (len - k >= gt) {
            // 第 k 大的元素在 [gt， curEnd] 区间内，所以更新下curStart 接着排序
            curStart = gt;
        } else { // len - k <= lt
            // 第 k 大的元素在 [curStart, lt] curEnd 接着排序
            curEnd = lt;
        }
    }
};

function swap (arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

console.log(findKthLargest([2,1], 2));
console.log(findKthLargest([3,2,1,5,6,4], 2));
console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4));
