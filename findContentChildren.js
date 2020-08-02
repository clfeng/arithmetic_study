/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    g = g.sort((prev, next) => next - prev);
    s = s.sort((prev, next) => next - prev);

    let si = 0;
    let gi = 0;
    let res = 0;

    while (gi < g.length && si < s.length) {
        if (s[si] >= g[gi]) {
            si++;
            gi++;
            res++;
        } else {
            gi++;
        }
    }

    return res;
};

let ret = findContentChildren([1,2], [1,2,3]);

console.log(ret);