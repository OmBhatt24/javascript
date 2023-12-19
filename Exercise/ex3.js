console.log(true + false); // ? true is converted to the number 1. false is converted to the number 0
console.log([] == ![]); // ? [] is truthy value and ![] convert it into falsy value so []==false we use loose equality so it will to type coercion so [] is transformed to '' empty string which is falsy so false == false is true so output is true
console.log("helloWorld2" > "helloworld1"); // ? compares letter by letter W > w here it will compare by its ASCII codes w has greater ASCII code so this will outputs false
console.log("helloWorld2".toLowerCase() > "helloworld1".toLowerCase()); // ? returns true
console.log(1 / 0); // ? output Infinity
console.log(parseInt("hello")); // ? output NaN . bcz it try to parse string it start from left to right it will get character h so it will stop there . if string was '12hello' output would be 12
console.log(undefined + 1); // ? tries to convert undefined to number which is NaN so output is NaN
console.log(typeof typeof 42); // ? typeof 42 outputs 'number' so typeof 'number' outputs string
