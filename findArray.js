function findArray(ar1, arr2) {
    return arr1.length && arr2.length ? arr2.map(i => arr1[i]).filter(x => x !== undefined) : [];
}