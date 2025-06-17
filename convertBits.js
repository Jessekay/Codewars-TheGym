function convertBits(a, b) {
    return (a ^ b).toString(2).split('0').join('').length;
}