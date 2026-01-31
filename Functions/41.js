// 41. Write a function that takes a number as input and returns whether it is "even" or "odd".

function evenOrOdd(number) {
   const a = number % 2 === 0 ? "even": "odd";
   return a
}
const a = evenOrOdd(5)
console.log(a);
