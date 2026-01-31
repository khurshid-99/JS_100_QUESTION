// 27. Use nested `for` loops to print a 3×3 grid pattern where each row contains the numbers 1 to 3.

//   Example output format:

//   1 2 3
//   1 2 3
//   1 2 3

let num = 3;

for (let i = 1; i <= num; i++) {
  let row = "";

  for (let j = 1; j <= num; j++) {
     row += j + " "
    // console.log(row);
  }
    console.log(row);
}
