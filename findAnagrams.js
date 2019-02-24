/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    let l = 0;
    let r = -1; // [l..r] 为滑动窗口
    let ret = [];
    let map = {};

    for (let i = 0; i < p.length; i++) {
        map[p[i]] = 0;
    }

    let isInclude = createIsIncludeFunc(p)

    while (l < s.length && r < s.length) {
        if (isInclude(map)) {
            if (p.length === r - l + 1) {
                ret.push(l);
            }
            if (map[s[l]] > 0) {
                map[s[l]]--;
            }

            l++;
        } else {
            r++;
            if (typeof map[s[r]] === 'number') {
                map[s[r]]++;
            }
        }
    }

    return ret;
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

console.log(findAnagrams("cbaebabacd", "abc"));

// 接着做76