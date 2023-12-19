const person = { fname: "John", lname: "Doe", age: 25 };
const arr = ["hello", "world", "!"];
let arr2 = [3, 345, 468, 52, 3, 4, 56, 54];
const str = "hello world";
let text = "";
console.log(`length:${arr.length}`); // ? get the length of the array

console.log(`indexof:${arr.indexOf("world")}`); // ? get the index of specified string / substring / char in the array
console.log(`indexof:${arr.lastIndexOf("world")}`); // ? get the index of specified string  / substring / char start with right side

// forEach loop
arr.forEach((el) => console.log(el));

console.log(`${arr.map((el) => `${el}End`)}`); // ? manipulate every element returns new array
console.log(`filter:${arr.filter((el) => el !== "!")}`); // ? remove element which doesn't satisfy the condition . returns an array
console.log(`reduce:${arr.reduce((acc, curr) => acc.concat(curr), "")}`); // ? reduce the array into single value.
console.log(
  `reduceRight:${arr.reduceRight((acc, curr) => acc.concat(curr), "")}`
); // ? same as reduce but accumulate data right to left
console.log(`reverse:${arr.reverse()}`); // ? array is reverse in-place . we can use toSorted to create copy of the array
console.log(`sort:${arr.sort()}`); // ? sorted based on string
console.log(`sort ascending:${arr2.sort((a, b) => a - b)}`);
console.log(`sort descending:${arr2.sort((a, b) => b - a)}`);
console.log(`every:${arr2.every((el) => el > 0)}`); // ? return true if every element satisfy given condition . else return false
console.log(`some:${arr2.some((el) => el > 220)}`); // ? return true if any one element satisfy given condition . else return false
console.log(`includes:${arr2.includes(3)}`); // ? return true if search element is present in the array else false
console.log(`find:${arr.find((el) => el === "!")}`); // ? return element which satisfies specified element
console.log(`findIndex:${arr.findIndex((el) => el === "!")}`); // ? return index of the element which satisfies specified element
console.log(`join:${arr.join(" ")}`); // ? return string . Add all the elements of an array into a string, separated by the specified separator string.
console.log(`slice:${arr.splice(1, 1)}`); // ? splice(start, deleteCount, item1, item2, /* …, */ itemN) . here item 1 to N is item we want to insert . original array is mutated.
console.log(arr);
arr.splice(1, 1); // ? return removed element
console.log(arr);
