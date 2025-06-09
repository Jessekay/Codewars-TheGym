function calculator(a, b, sign) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return "unknown value";
  }

  return (sign === '+') ? a + b :
         (sign === '-') ? a - b :
         (sign === '*') ? a * b :
         (sign === '/') ? a / b :
         "unknown value";
}
