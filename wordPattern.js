/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
    let patternMap = new Map();
    let strMap = new Map();
    let patternArr = pattern.split('');
    let strArr = str.split(' ');

    if (patternArr.length !== strArr.length) {
        return false;
    }

    for (let i = 0; i < patternArr.length; i++) {
        if (patternMap.has(patternArr[i])) {
            if (patternMap.get(patternArr[i]) !== strArr[i]) {
                return false;
            }       
        } else {
            patternMap.set(patternArr[i], strArr[i]);
        }

        if (strMap.has(strArr[i])) {
            if (strMap.get(strArr[i]) !== patternArr[i]) {
                return false;
            }       
        } else {
            strMap.set(strArr[i], patternArr[i]);
        }
    }

    return true;
};