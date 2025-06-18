function alphabetWar(fight) {
    const leftSide = { w: 4, p: 3, b: 2, s:1 };

    const rightSide = { m: 4, q: 3, d: 2, z: 1 };

    let leftPower = 0;

    let rightPower = 0;

    for (let char of fight) {
        if (leftSide[char]) {
            leftPower += leftSide[char];
        } 
        
        else if (rightSide[char]) {
            rightPower += rightSide[char];
        } 
    }

    if (leftPower > rightPower) {
        return "Left side wins!"
    } else if (rightPower > leftPower) {
        return "Right side wins!"
    } else {
        return "Let's fight again!";
    }
}