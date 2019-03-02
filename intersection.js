/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let record = new Set();
    let retSet = new Set();

    for (let i = 0; i < nums1.length; i++) {
        record.add(nums1[i]);
    }

    for (let i = 0; i < nums2.length; i++) {
        if (record.has(nums2[i])) {
            retSet.add(nums2[i]);
        }
    }

    return [...retSet];

};