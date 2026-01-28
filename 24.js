// 24. Using a `for` loop, print all odd numbers from 1 to 20. Use `continue` to skip even numbers.

for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}
