/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let nextNum = n;
    let curNum;
    let set = new Set();

    set.add(nextNum);

    while(nextNum !== 1) {
        curNum = nextNum;
        nextNum = 0;

        while(curNum > 0) {
            nextNum += Math.pow(curNum % 10, 2);
            curNum = Math.floor(curNum / 10);
        }

        if (!set.has(nextNum)) {
            set.add(nextNum);
        } else {
            return false;
        }
    }

    return true;
};

// console.log(isHappy(19));