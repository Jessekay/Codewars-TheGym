function solution(number) {
  if (number < 0) return 0;

  let total = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      total += i;
    }
  }
  return total;
}
console.log(solution(10));
