function printError(s) {
    const errors = s.split('').filter(char => char > 'm').length;
    return `${errors}/${s.length}`;
}