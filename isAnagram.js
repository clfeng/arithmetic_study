/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    let sRecord = {};
    let tRecord = {};
    let sTotal = 0;
    let tTotal = 0;

   for (let i = 0; i < s.length; i++) {
       if (!sRecord[s[i]]) {
           sRecord[s[i]] = 1;
       } else {
           sRecord[s[i]]++;
       }

       sTotal++;
   } 

   for (let i = 0; i < t.length; i++) {
        if (!tRecord[t[i]]) {
            tRecord[t[i]] = 1;
        } else {
            tRecord[t[i]]++;
        }
        
        tTotal++;
   }

   if (sTotal !== tTotal) {
       return false;
   }

   for (let prop in sRecord) {
       if (sRecord.hasOwnProperty(prop)) {
           if (sRecord[prop] !== tRecord[prop]) {
               return false;
           }
       }
   }

   return true;
};

console.log(isAnagram('a', 'b'));