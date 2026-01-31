// 30. Create an object with keys like `name` and `age`. Use a `for...in` loop to print all the keys of the object.

const user = {
  name: "Khurshid",
  age: 30,
};

for (const key in user) {

  const element = user[key];
  console.log(element);
  
}
