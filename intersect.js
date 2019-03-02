/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let record = {};

    for (let i = 0; i < nums1.length; i++) {
        let element = nums1[i];

        if (!record[element]) {
            record[element] = 1;
        } else {
            record[element]++;
        }
    }

    let ret = [];

    for (let i = 0; i < nums2.length; i++) {
        let element = nums2[i];
        if (record[element]) {
            ret.push(element);
            record[element]--;
        }
    }

    return ret;
};  