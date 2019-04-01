/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    let map = {};
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            map[s[i]]++;
        } else {
            map[s[i]] = 1;
        }
    }

    let ret = '';
    Object.keys(map).sort((pre, next) => {
        return map[next] - map[pre];
    }).forEach(key => {
        for (let i = 0; i < map[key]; i ++) {
            ret += key;
        }
    });

    return ret;
};