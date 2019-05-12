function test (n) {
    let arr = [];
    let ret = [];
    let flag = true;
    for (let i = 0; i < n; i++) {
        arr.push(i);
    }

    while(arr.length) { //原数组长度为 0 时结束循环
        let curElement = arr.splice(0, 1); //取出原数组第一个元素

        if (flag) {
            ret.push(curElement); // 将当前该元素删除
            flag = false;
        } else {
            arr.push(curElement); // 将当前元素推入原数组末尾
            flag = true;
        }
    }
    return ret;
}