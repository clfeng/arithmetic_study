/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function (A, B, C, D) {
    let map = new Map();
    let ret = 0;
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B.length; j++) {
            let diff = -(A[i] + B[j]);
            if (map.has(diff)) {
                let count = map.get(diff);
                map.set(diff, ++count);
            } else {
                map.set(diff, 1);
            }
        }
    }

    for (let k = 0; k < C.length; k++) {
        for (let l = 0; l < D.length; l++) {
            let sum = C[k] + D[l];
            let count = map.get(sum);
            if (count) {
                ret += count;
            }
        }
    }
    return ret;
};




let A = [-1, -1];
let B = [-1, 1];
let C = [-1, 1];
let D = [1, -1];

let ret = fourSumCount(A, B, C, D);
console.log(ret);