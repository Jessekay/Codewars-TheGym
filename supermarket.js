function queueTime(customers, n) {
  const tills = new Array(n).fill(0)

  for (let i = 0; i < customers.length; i++) {
    let minIndex = 0;
    for (let j = 1; j < tills.length; j++) {
      if (tills[j] < tills[minIndex]) {
        minIndex = j;
      }
    }
    tills[minIndex] += customers[i];
  }
  return Math.max(...tills)
}

const customers = [10, 2, 3, 3];
const n = 2
console.log(queueTime(customers, n));
