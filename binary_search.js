// 在算法的实现过程中，一定要定义清楚变量的含义
// 并在整个过程中进行维护

function binarySearch (arr, target) {
    let l = 0,
        r = arr.length - 1,
        mid; // 在 [l ... r] 中查找target
    

    while (l <= r) {
        mid = Math.floor((l + r) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (target < arr[mid] ) {
            r = mid - 1;
        } else { // target > arr[mid]
            l = mid + 1;
        }
    }

    return -1; //查找失败
}


// 测试
let n = 10000000;
let data = genOrderArr(n);
let start = Date.now();
for (let i = 0; i < n; i++) {
    if (i !== binarySearch(data, i)) {
        console.log('error');
    }
}
// console.log('result:' + binarySearch(data, 500));
let time = Date.now() - start;
console.log(time);