// * Write a program to compare two objects and return true or false.
const obj1 = { hair: "long", beard: true };
const obj2 = { hair: "long", beard: false };

const compareTwoObjects = (obj1, obj2) => {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
};

// * Write a program to convert string to a 2D array of objects. The first row of the string is used as the title.
// ? inputString = "col1,col2\na,b\nc,d"
// ? output [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}]
const stringTo2DArrayOfObject = (str) => {
  const rows = str.split("\n");
  const keys = rows.splice(0, 1)[0].split(",");
  let result = [];
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
// ?  input = [{col1:'a', col2:'b'}, {'col1': 'c', 'col2': 'd'}]
// ? output: 'Col1,col2\na,b'

const TwoDArrayOfObjectToString = (arrayOfObj) => {
  let ans = "";

  arrayOfObj.forEach((obj) => {
    if (ans === "") {
      ans += Object.keys(obj).join(",");
      ans += "\n";
    }
    ans += Object.values(obj).join(",");
    ans += "\n";
  });

  return ans.slice(0, -1);
};

// * Write a program to replace the names of multiple object keys.
// ? output { firstName:'JJ', Role:'Programmer', age:22 }
// const obj = { name: "JJ", job: "Programmer", age: 22 };
// const renameKey = { name: "firstName", job: "Role" };
const replaceNamesOfKeys = (obj, renameKey) => {
  const entries = Object.entries(obj);
  const keysToBeChanged = Object.keys(renameKey);
  entries.forEach((entry) => {
    if (keysToBeChanged.includes(entry[0])) {
      entry[0] = renameKey[entry[0]];
    }
  });
  return Object.fromEntries(entries);
};

// * Write a program to filter out the non-unique values in an array.
// const input = [1, 2, 2, 3, 4, 4, 5];

const removeDuplicates = (arr) => {
  let mp = new Map();
  arr.forEach((el) => {
    if (mp.has(el)) mp.set(el, mp.get(el) + 1);
    else mp.set(el, 1);
  });
  let ans = [];
  mp.forEach((val, key, mp) => {
    if (val === 1) ans.push(key);
  });
  return ans;
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
const convert24HoursTo12Hours = (input) => {
  if (input === 0) return "12am";
  else if (input === 24) return "";
  return input > 12 || input < 24 ? `${input - 12}pm` : `${input}am`;
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
