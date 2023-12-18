const person = { fname: "John", lname: "Doe", age: 25 };
const arr = ["this", "is", "an", "array"];
const str = "hello world";
let text = "";
// ? For in loop => to iterate over object
for (let x in person) {
  console.log(x); // gives keys
  console.log(person[x]); // gives values
}

// ? Do not use for in over an Array if the index order is important.
// ? The index order is implementation-dependent, and array values may not be accessed in the order you expect.
// ? It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.

// ? The JavaScript for of statement loops through the values of an iterable object.
// ? Iterable Elements: Arrays Strings Maps Sets

for (const iterator of str) {
  console.log(iterator);
}

// forEach loop
arr.forEach((el) => console.log(el));
