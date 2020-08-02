/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (s.length === 0 || t.length === 0) {
        return "";
    }

    let l = 0;
    let r = -1; // [l..r] 为滑动窗口
    let ret = [];
    let retLen = s.length + 1; // 设置一个最大值，方便对比
    let map = {};

    for (let i = 0; i < t.length; i++) {
        map[t[i]] = 0;
    }

    let isInclude = createIsIncludeFunc(t);

    while (l < s.length && r < s.length) {
        if (isInclude(map)) {
            if (r - l + 1 < retLen) { // 如果新的窗口的大小比之前记录到的窗口大小还要小的话，更新一下 
                ret = [l, r];
                retLen = r - l + 1;
            }

            // 窗口指针往右移动
            if (map[s[l]] > 0) {
                map[s[l]]--;
            }
            l++
        } else {
            r++;
            if (typeof map[s[r]] === 'number') {
                map[s[r]]++;
            }            
        }
    }
    if (!ret.length) {
        return '';
    }
    return s.slice(ret[0], ret[1] + 1);
};


function createIsIncludeFunc (p) {
    let originMap = {};

    for (let i = 0; i < p.length; i++) {
        if (!originMap[p[i]]) {
            originMap[p[i]] = 1;
        } else {
            originMap[p[i]]++;
        }
    }

    return function (map) {
        for (const key in originMap) {
            if (originMap.hasOwnProperty(key)) {
                if (map[key] < originMap[key]) {
                    return false;
                }
                
            }
        }

        return true;
    }
}

console.log(minWindow("ADOBECODEBANC", "ABC"));