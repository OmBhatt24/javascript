"use strict";
const person1 = { fname: "John", lname: "Doe", age: 25 };
const person2 = { occupation: "Intern", age: 25 };
const arr = ["hello", "world", "!"];
const str = "hello world";

const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};

// ? copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
// ? done in-place person is mutated
console.log(Object.assign(person1, person2)); // ? first param : target , second : source
// console.log(person1);

// ? creates a new object, using an existing object as the prototype of the newly created object.
const me = Object.create(person);
console.log(`me:`, me);
// ? here me.prototype is equal to person.prototype

me.name = "Om"; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // Inherited properties can be overwritten

me.printIntroduction();

// ? defines a new property directly on an object, or modifies an existing property on an object, and returns the object.
// ? 1st param : object 2nd : property name , 3rd : descriptor

Object.defineProperty(me, "name", { value: "om", writable: false });
// ! me.name = "temp"; throw error. because we try to change the name which is not writable.

// ? to define multiple properties in an object
Object.defineProperties(me, {
  occupation: { value: "intern", writable: true },
  dob: { value: "1/2/3", writable: false },
});
// ? returns array of array where first element is property name and second element is property value
console.log(Object.entries(person1));

// ? transforms a list of key-value pairs into an object.
const entries = new Map([
  ["foo", "bar"],
  ["baz", 42],
]);

const obj = Object.fromEntries(entries);

console.log(obj);

// ? determines whether two values are the same value.
console.log(Object.is(NaN, NaN));
// ? it is different from == because it does type coasion but is doesn't
// ? ''==false is true but Object.is('',false) is false
// ? it compares by the reference if both references to same memory location it will return true
console.log(Object.is("", false));
console.log(Object.is({}, {}));
const obj1 = {};
console.log(Object.is(obj1, obj1)); // ? true because it points to same memory location

console.log(Object.keys(obj)); // ? to get the keys of the object . returns an array
console.log(Object.values(obj)); // ? to get the values of the object in form of an array
