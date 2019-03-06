/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    let sRetStr = '';
    let tRetStr = '';
    let sMap = {};
    let tMap = {};

    if (s.length !== t.length) {
        return false;
    }

    for (let i = 0; i < s.length; i++) {
        if (!sMap[s[i]]) {
            sMap[s[i]] = t[i]
        }
        sRetStr += sMap[s[i]];

        if (!tMap[t[i]]) {
            tMap[t[i]] = s[i]
        }
        tRetStr += tMap[t[i]];
    }
    
    return sRetStr === t && tRetStr === s;
};