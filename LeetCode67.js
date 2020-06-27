
const addBinary = (a, b) => {
    let res = '', leftover = 0, i = a.length - 1, j = b.length - 1;
    while (i >= 0 || j >= 0) {
        let sum = leftover;
        
        if (i >= 0) { sum += parseInt(a[i--]); }
        if (j >= 0) { sum += parseInt(b[j--]); }
        
        res = (sum % 2) + res;
        leftover = sum / 2 | 0;
    }
    
    if (leftover > 0) { res = leftover + res; }
    return res;
};

