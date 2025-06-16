function isVow(a) {
    return a.map(num => {
        const char = String.fromCharCode(num);
        return 'aeiuo'.includes(char) ? char : num;
    });
}