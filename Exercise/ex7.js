// 2. Write a JavaScript program to find the largest element in a nested array.
// input : [[1,5],[[3,4,6],[8]],[0,7]]
// output : 8
const maxElementInArray = (arr) => {
  return Math.max(...arr.flat(Infinity));
};

// 1. let arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Find the frequency of the most occured element in the array
// input : arr1
// output : a '5 times'

// console.log(
//   maxElementInArray([
//     [1, 5],
//     [[3, 4, 6], [8]],
//     [0, 7],
//   ])
// );

const maxFreq = (arr) => {
  // ? approach 1
  let freq = {};
  arr.map((el) => {
    if (freq[el]) freq[el]++;
    else freq[el] = 1;
  });
  const maxEle = maxElementInArray(Object.values(freq));
  const [[key, value]] = Object.entries(freq).filter(
    ([_, value]) => value === maxEle
  );
  return `${key} \'${value} times\'`;
};
// console.log(maxFreq([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]));

// 3. Given two strings, return true if they are anagrams of one another (ignore case)
// example: "pools" is an anagram of "loops", "Mary" is an anagram of "Army"
// input1: "Hello"
// input2: "Holla"
// output: false
const anagramOrNot = (str1, str2) => {
  return (
    str1.toLowerCase().split("").sort().join("") ===
    str2.toLowerCase().split("").sort().join("")
  );
};
// console.log(anagramOrNot("Hello", "hOlle"));

// 4. Given an array containing numbers from 1 to N, with one number missing, find the missing number.
// input: [1,2,4,5]
// output: 3

const findMissingNumber = (arr) => {
  let sum = arr.reduce((acc, curr) => acc + curr, 0);
  let n = arr.length + 1;
  let expectedSum = (n * (n + 1)) / 2;
  return expectedSum - sum;
};
// console.log(findMissingNumber([1, 2, 4, 5]));
// 5. Will the below code return any error? If yes, identify the error.

function fetchData(callback) {
  fetch("https://jsonplaceholder.typicode.com/todos/1") // ? jsonplaceholder api
    .then((response) => response.json())
    .then((data) => callback(null, data))
    .catch((error) => callback(error));
}

fetchData(function (error, data) {
  if (error) {
    console.log("Error:", error);
  } else {
    console.log("Data:", data);
  }
}); // ? missing
