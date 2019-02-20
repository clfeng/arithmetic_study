// 对浏览器处理速度有个基本认识

for (let i = 1; i < 10; i++) {
    let n = Math.pow(10, i);
    let sum = 0;
    let start = Date.now();

    for (let j = 0; j < n; j++) {
        sum += j;    
    }
    
    let time = Date.now() - start;

    console.log('level: 10^' + i + ', time: ' + time + 'ms');
}
