function pow(x, n) {
    let result = x;
    for (let i = 1; i < n; i += 1) {
        result = result * x;
    }
    return result;
}

export {pow}
