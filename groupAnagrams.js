/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let strMap = new Map();

    strs.forEach(str => {
        let orderStr = str.split('').sort().join('');
        if (strMap.has(orderStr)) {
            let strArr = strMap.get(orderStr);
            strArr.push(str);
            strMap.set(orderStr, strArr);
        } else {
            strMap.set(orderStr, [str]);
        }
    });

    return [...strMap.values()];
    
};

let arr = ["eat", "tea", "tan", "ate", "nat", "bat"];
let ret = groupAnagrams(arr);
console.log(ret);