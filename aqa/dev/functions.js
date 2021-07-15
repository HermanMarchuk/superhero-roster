function pow (x, n) {
    let result = x;
    for (let i = 1; i < n; i += 1) {
        result = result * x;
    }
    return result;
};

function camelize (text) {
    return text.replace(/^([A-Z])|[\s-_]+(\w)/g, function(match, p1, p2, offset) {
        if (p2) {
            return p2.toUpperCase();
        }
        return p1.toLowerCase();
    });
}

function filterRange (arr, a, b) {
    return arr.filter(item => (a <= item && item <= b))
};


module.exports = {
    pow,
    camelize
}
