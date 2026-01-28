// 20. Create an array using `const`, print it, attempt to reassign the entire array (and handle the error), then modify the existing array by adding a new element and print the updated array.

const arr = ["Khurshid", "Mahabub", "Poloo", "Ketann", "Aman", "Dev"];
console.log("Original array ", arr);

try {
  arr = ["a", "b", "c", "d", "e"];
} catch (error) {
  console.log(`Error : ${error.message}`);
}

arr.push("Kobir")
console.log(arr);
