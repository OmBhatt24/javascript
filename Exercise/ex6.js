// * Write a program to compare two objects and return true or false.
const obj1 = { hair: "long", beard: true };
const obj2 = { hair: "long", beard: false };

// > todo:  do it with Object.keys and Object.values
const compareTwoArrays = (arr1, arr2) =>
  arr1.length === arr2.length &&
  Array.from(arr1).every((val, idx) => val === arr2[idx]);

// console.log(compareTwoArrays([1, 2], [1, 2]));
const compareTwoObjects = (obj1, obj2) => {
  // ? approach 1
  // return JSON.stringify(obj1) === JSON.stringify(obj2);
  return (
    compareTwoArrays(Object.keys(obj1), Object.keys(obj2)) &&
    compareTwoArrays(Object.values(obj1), Object.values(obj2))
  );
};
console.log(compareTwoArrays(obj1, obj2));
// * Write a program to convert string to a 2D array of objects. The first row of the string is used as the title.
// ? inputString = "col1,col2\na,b\nc,d"
// ? output [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}]
const stringTo2DArrayOfObject = (str) => {
  const rows = str.split("\n");
  const keys = rows.splice(0, 1)[0].split(",");
  let result = [];

  // todo : try with single loop
  rows.forEach((row) => {
    const values = row.split(",");
    let entries = [];
    for (let index = 0; index < keys.length; index++) {
      entries.push([keys[index], values[index]]);
    }
    result.push(Object.fromEntries(entries));
  });
  return result;
};

// * Write a program to convert an array of objects to a string. That contains dynamic columns and de limiter specified.
// ?  input = [{col1:'a', col2:'b'}, {'col1': 'c', 'col2': 'd','col3':'e'}]
// ? output: 'Col1,col2\na,b'
// const input1 = [
//   { col1: "a", col2: "b" },
//   { col1: "c", col2: "d", col3: "e" },
// ];
const TwoDArrayOfObjectToString = (arrayOfObj) => {
  let ans = "";
  //  todo do with set
  const keysSet = new Set();
  arrayOfObj.forEach((obj) => {
    Object.keys(obj).forEach((key) => keysSet.add(key));
  });
  arrayOfObj.forEach((obj, idx) => {
    if (idx === 0) {
      ans += Array.from(keysSet).join(",");
      ans += "\n";
    }
    ans += Object.values(obj).join(",");
    ans += "\n";
  });

  return ans.slice(0, -1);
};
// console.log(TwoDArrayOfObjectToString(input1));
// * Write a program to replace the names of multiple object keys.
// ? output { firstName:'JJ', Role:'Programmer', age:22 }
// const obj = { name: "JJ", job: "Programmer", age: 22 };
// const renameKey = { name: "firstName", job: "Role" };
const replaceNamesOfKeys = (obj, renameKey) => {
  // > todo : mutate original object
  // ? approach 1
  // const entries = Object.entries(obj);
  // const keysToBeChanged = Object.keys(renameKey);
  // entries.forEach((entry) => {
  //   if (keysToBeChanged.includes(entry[0])) {
  //     entry[0] = renameKey[entry[0]];
  //   }
  // });
  // return Object.fromEntries(entries);

  // ? approach 2
  const keysToBeChanged = Object.keys(renameKey);
  keysToBeChanged.forEach((keyToChange) => {
    obj[renameKey[keyToChange]] = obj[keyToChange];
    delete obj[keyToChange];
  });
  return obj;
};
// console.log(replaceNamesOfKeys(obj, renameKey));
// * Write a program to filter out the unique values in an array.
const input = [1, 2, 2, 3, 4, 4, 5];
// > todo take one output array

const uniqueValues = (arr) => {
  let output = [];
  // ? approach 1
  // let mp = new Map();
  // arr.forEach((el) => {
  //   if (mp.has(el)) mp.set(el, mp.get(el) + 1);
  //   else mp.set(el, 1);
  // });
  // let ans = [];
  // mp.forEach((val, key, mp) => {
  //   if (val === 1) ans.push(key);
  // });
  // ? approach 2
  output.push(arr[0]);
  for (let index = 1; index < arr.length; index++) {
    const element = arr[index];
    let foundIdx = output.findIndex((el) => el === element);
    if (foundIdx !== -1) output.splice(foundIdx, 1);
    else output.push(element);
  }
  return output;
};
const nonUniqueValues = (input) => {
  let temp = input[0];
  let output = [];
  for (let index = 1; index < input.length; index++) {
    const element = input[index];
    if (element === temp) {
      output.push(element);
    } else {
      temp = element;
    }
  }
  return output;
};
// * Write a program to remove the key-value pairs to the given keys.
// ? output {"a":1,"c":3}
// const input = { a: 1, b: "2", c: 3 };
// const removeKey = ["b"];

const removeKeyValuePairs = (input, removeKey) => {
  removeKey.forEach((el) => delete input[el]);
  return input;
};

// * Write a program to convert time 24 hours to 12 hours.
// input1 = 0 ;  12am
// input2 = 13 ; 1pm
// >  todo do cyclic
const convert24HoursTo12Hours = (input) => {
  if (input === 0) return "12am";
  else if (input === 12) return "12pm";
  else if (input >= 24) return convert24HoursTo12Hours(input % 24);
  return input > 12 && input < 24 ? `${input - 12}pm` : `${input}am`;
};
// * Write a program that will return true if the string is y/yes or false if the string is n/no
const returnTrueFalse = (input) => {
  if (input.match(/^y(es)?$/i)) {
    return true;
  } else if (input.match(/^n(0)?$/i)) return false;
  else {
    console.log("Enter Y/Yes for true and N/No for false");
    return -1;
  }
};

// * Write a program to get a sorted array of objects ordered by properties and orders.
const dynamicSort = (property, order) => (a, b) => {
  const aValue = a[property];
  const bValue = b[property];

  if (typeof aValue === "string") {
    if (order === "asc") {
      return aValue.localeCompare(bValue);
    } else if (order === "desc") {
      return bValue.localeCompare(aValue);
    }
  } else if (typeof aValue === "number") {
    if (order === "asc") {
      return aValue - bValue;
    } else if (order === "desc") {
      return bValue - aValue;
    }
  } else {
    throw new Error("Invalid order");
  }
};

const sortArrayOfObjects = (inputArray, orderedBy, orders) => {
  inputArray.sort((a, b) => {
    let result = 0;
    for (let i = 0; i < orderedBy.length; i++) {
      const property = orderedBy[i];
      const order = orders[i];
      result = dynamicSort(property, order)(a, b);
      if (result !== 0) {
        break;
      }
    }
    return result;
  });
  return inputArray;
};

// const input = [
//   { name: "fred", age: 48 },
//   { name: "barney", age: 36 },
//   { name: "fred", age: 40 },
// ];
// const ordered_by = ["name", "age"];
// const orders = ["asc", "desc"];
// console.log(sortArrayOfObjects(input, ordered_by, orders));

// * Write a program to combine the numbers of a given array into an array containing all combinations. ( reduce )

const allCombinations = (inputArray) => {
  return inputArray.reduce(
    (combinations, number) => {
      const newCombination = combinations.map((c) => [number].concat(c));
      return combinations.concat(newCombination);
    },
    [[]]
  );
};

const allCombinationsShortHand = (inputArray) =>
  inputArray.reduce(
    (combinations, number) =>
      combinations.concat(
        combinations.map((combination) => [number].concat(combination))
      ),
    [[]]
  );
// console.log("ans", allCombinations([1, 2]));
