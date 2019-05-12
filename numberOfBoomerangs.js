/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
    let ret = 0;
    for (let i = 0; i < points.length; i++) {
        let calcMap  = {};

        for (let j = 0; j < points.length; j++) {
            let distance = Math.pow(points[i][0] - points[j][0], 2) + Math.pow(points[i][1] - points[j][1], 2);
            if (i === j) {
                continue;
            }
            if (!calcMap[distance]) {
                calcMap[distance] = 1;
            } else {
                calcMap[distance]++;
            }
        }
        
        Object.keys(calcMap).forEach(distance => {
            let count = calcMap[distance];
            if (count > 1) {
                ret += combinationCount(count);
            }
        });
    }

    return ret;
};

function combinationCount (n) {
    return n * (n - 1);
}

let ret = numberOfBoomerangs([[0,0],[1,0],[-1,0],[0,1],[0,-1]]);

console.log(ret);