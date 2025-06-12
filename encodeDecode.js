function encodeRailFenceCipher(string, numberRails) {
  if (!string || numberRails < 2) return string;

  const rails = Array.from({ length: numberRails }, () => []);
  let rail = 0;
  let direction = 1;

  for (const char of string) {
    rails[rail].push(char);

    if (rail === 0) direction = 1;
    else if (rail === numberRails - 1) direction = -1;

    rail += direction;
  }

  return rails.flat().join('');
}

function decodeRailFenceCipher(string, numberRails) {
  if (!string || numberRails < 2) return string;

  const length = string.length;
  const railPattern = Array(length);
  let rail = 0;
  let direction = 1;

  for (let i = 0; i < length; i++) {
    railPattern[i] = rail;

    if (rail === 0) direction = 1;
    else if (rail === numberRails - 1) direction = -1;

    rail += direction;
  }

  const railCounts = Array(numberRails).fill(0);
  for (const r of railPattern) {
    railCounts[r]++;
  }

  const railStrings = [];
  let pointer = 0;
  for (let count of railCounts) {
    railStrings.push(string.slice(pointer, pointer + count).split(''));
    pointer += count;
  }

  let result = '';
  for (const r of railPattern) {
    result += railStrings[r].shift();
  }

  return result;
}
