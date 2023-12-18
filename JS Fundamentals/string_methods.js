const person = { fname: "John", lname: "Doe", age: 25 };
const arr = ["hello", "world", "!"];
const str = "hello world";
let text = "";

console.log(`length:${str.length}`); // ? get the length of the string

console.log(`indexof:${str.indexOf("world")}`); // ? get the index of specified string / substring / char
console.log(`indexof:${str.lastIndexOf("world")}`); // ? get the index of specified string  / substring / char start with right side
console.log(`Search: ${str.search(/l/)}`); // ? return index of the found string
let str2 = "    hello world    ";
console.log(`charAt:${str.charAt(4)}`); // ? return value of the character at specified position
console.log(`charCodeAt:${str.charCodeAt(4)}`); // ? return ASCII value of the character
console.log(`Trim:${str2.trim()}`); // ? trim the string from both side . we can use trimStart and trimEnd to trim left or right portion of the string .
console.log(`Slice:${str.slice(4)}`); // ? first param:start second :end . return a string . doesn't do inplace transformation
console.log(str.replace("world", "word")); // ? Replaces text in a string, using a regular expression or  string. first param: A string or regular expression to search for.second param :A string containing the text to replace.
console.log(str);

console.log(`concat:${str.concat(str2)}`); // ? concatenate to strings
console.log(`upper:${str.toUpperCase()}`);
console.log(`lower:${str.toLowerCase()}`);

console.log(`split:${str.split(" ")}`); // ? return an array of strings which was separated by given separator here : ' '
console.log(`substring:${str.substring(4)}`); // ? return a substring param 1 : start , param 2 : end
console.log(`substr:${str.substr(4)}`); // ? return substring param 1: start , param 2 : length of the subtring we want  deprecated
