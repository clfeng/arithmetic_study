/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    let map = {};
    let max = 0;

    if (points.length === 1) {
        return 1;
    }
    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            let lineParams = getLineParams(points[i], points[j]).join('-');

            if (!map[lineParams]) {
                map[lineParams] =  new Set();
            }

            let linePointsSet = map[lineParams];
            linePointsSet.add(i);
            linePointsSet.add(j);

            max = Math.max(max, linePointsSet.size);
        }
    }

    return max;
};
    
// 获取描绘线的两个参数 k 和 b ,公式 y = kx + b;
// 如果是一条竖线即 x = t; 返回的数组只有一个参数

// get a line's two params of k and b, the equation is y = kx + b;
// especially: if the line perpendicular to the x-axis, the return array is only one params, just like a line of x = t
function getLineParams (point1, point2) {
    if (point2[0] === point1[0]) {
        return [point1[0]];
    }


    let k = (point2[1] - point1[1])  / (point2[0] - point1[0]);
    let fixPrecision = Math.pow(10, k.toString().length - 1);
    let point;

    if (point1[0] === 0 && point1[1] === 0) {
        point = point2;
    } else {
        point = point1;
    }

    let b = (point[1] * fixPrecision - k * fixPrecision * point[0]) / fixPrecision;

    return [k, b];
}

let ret = maxPoints([[0,0],[94911151,94911150],[94911152,94911151]]);
console.log(ret);

/* 

0.4142857142857143-15.999999999999972
2 0.4142857142857143-16
*/