// ? Falsy Values : false, 0 (zero), '' (empty string), null, NaN, undefined

console.log(null == undefined); // ? output:true,  both are falsy value , we use loose equality so it will not check type if we would use === then it will be false
console.log(`type:${typeof NaN}`); // ? output: Number
console.log(NaN == NaN); // ? output false even if we use === . NaN is that it does not equal itself.
console.log(Number.isNaN(NaN)); // ? true . to check whether given number is NaN or not .
console.log([1, 2, 3] == "1,2,3"); // ?  equality operator (==) to compare different types, it will attempt to perform type coercion to make the operands of the same type before making the comparison. In the case of an array and a string, the array is converted to a string, and then the comparison is made. if we use === return false
console.log({} == false); // ? falsy value
console.log("" == false); // ? falsy value
if ([]) {
  console.log("Will empty array return true?"); // ? empty array is not falsy value
}
console.log("2" + 2); // ? + can perform 2 task addition or concatination . to perform concat it will do type coercion . convert Number to string
console.log(typeof null); // ? everything in js directly or indirectly are object
let a = 1;
const b = a++; // ? first perform const b = a then perform a=a+1
console.log("b => ", b);
const c = ++a; // ? first perform a = a +1 then const c = a
console.log("c => ", c); // ? output 3
console.log("a => ", a); // ? output 3
