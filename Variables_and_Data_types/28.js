// 28. Reverse an array manually (without using the `reverse()` method) and print the reversed array.

const arr = [1, 2, 3, 4, 5];
//         start        end
//           5, 4, 3, 2, 1
//              meddile

let start = 0;
let end = arr.length - 1;
// console.log(end);

while (start < end) {
  let temp = arr[start];
  arr[start] = arr[end];
  arr[end] = temp;

  console.log(start, end);

  start++;
  end--;
}

console.log(arr);
