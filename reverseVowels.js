/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let reg = /[aeiouAEIOU]/;
    let i = 0;
    let j = s.length - 1;
    let strArr = s.split('');

    while(i < j) {
        if (!reg.test(strArr[i])) {
            i++;
        } else if (!reg.test(strArr[j])) {
            j--;
        } else {
            swap(strArr, i++, j--);
        }
    }

    return strArr.join('');
};

function swap (arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

console.log(reverseVowels('hello'));