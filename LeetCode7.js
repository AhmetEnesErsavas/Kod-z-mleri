var reverse = function(x) {
    const isNegative = x < 0; 
    x = parseInt(x.toString().split('').reverse().join(''), 10); 
    if (isNegative) x = -x;
    if (x > Math.pow(2, 31) - 1 || x < -Math.pow(2, 31)) return 0;
    return x;
};
