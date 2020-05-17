/**
 * @param {string} s
 * @return {number}
 */


/*
f(n)  = f(n - 1) + f(n - 2)?

// 特殊场景：
如果是 数字子串只要是零开头的都算是 0 



*/
// var numDecodings = function(s) {
//     function _numDecodings (s) {
//         if (s.startsWith('0') || !s.length) {
//             return 0;
//         }

//         if (s <= 10 || +s === 20) {
//             return 1;
//         }

//         if (s > 10 && s <= 26) {
//             return 2;
//         }
//         if (s.slice(0, 2) > 26) {
//             return _numDecodings(s.slice(1))
//         } else {
//             return _numDecodings(s.slice(1)) + _numDecodings(s.slice(2));
//         }
//     }

//     return _numDecodings(s);
// };

// 记忆话搜索
// var numDecodings = function(s) {
//     let mem = {};

//     function _numDecodings (s) {
//         if (s.startsWith('0') || !s.length) {
//             return 0;
//         }

//         if (s <= 10 || +s === 20) {
//             return 1;
//         }

//         if (s > 10 && s <= 26) {
//             return 2;
//         }

//         if (mem.hasOwnProperty(s)) {
//             return mem[s]
//         }

//         if (s.slice(0, 2) > 26) {
//             return mem[s] = _numDecodings(s.slice(1))
//         } else {
//             return mem[s] = _numDecodings(s.slice(1)) + _numDecodings(s.slice(2));
//         }
//     }

//     return _numDecodings(s);
// };


var numDecodings = function(s) {
    if (s.startsWith('0') || !s.length) {
        return 0;
    }

    if (s <= 10 || +s === 20) {
        return 1;
    }

    if (s > 10 && s <= 26) {
        return 2;
    }

    let mem = {};

    for (let i = s.length - 1; i >= 0; i--) {
        let curStr = s.slice(i);

        if (curStr.startsWith('0')) {
            mem[curStr] = 0;
            continue;
        }

        if (curStr <= 10 || +curStr === 20) {
            mem[curStr] = 1;
            continue;
        }

        if (curStr > 10 && curStr <= 26) {
            mem[curStr] = 2;
            continue;
        }
        if (curStr.slice(0, 2) > 26) {
            mem[curStr] = mem[curStr.slice(1)];
        } else {
            mem[curStr] = mem[curStr.slice(1)] + mem[curStr.slice(2)];
        }

    }
    return mem[s];
};

let ret = numDecodings("0");

console.log(ret);