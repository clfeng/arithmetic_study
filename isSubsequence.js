/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let si = 0;
    let ti = 0;

    while(si < s.length && ti < t.length) {
        if (s[si] === t[ti]) {
            si++;
            ti++;
        } else {
            ti++;
        }
    }

    return si >= s.length;
};


// let ret = isSubsequence("abc", "ahbgdc");
let ret = isSubsequence("axc", "ahbgdc");

console.log(ret);