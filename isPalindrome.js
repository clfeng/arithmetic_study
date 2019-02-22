/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.toLocaleLowerCase().replace(/[^a-z\d]/g, '');

    let i = 0;
    let j = s.length - 1;

    while(i < j) {
        if (s[i] === s[j]) {
            i++;
            j--;
        } else {
            return false;
        }
    }

    return true;
};

console.log(isPalindrome("0P"));