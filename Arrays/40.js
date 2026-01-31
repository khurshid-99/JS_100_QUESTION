// 40. Create a copy of an array using the spread operator (`...`). Print the copied array and also print whether the copied array and original array reference the same memory.

const arr = [1, 2, 3, 4, 5];

const copyArr = [...arr];
console.log(copyArr);
console.log(arr === copyArr); //false
