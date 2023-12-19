var a = 1; // ? functional scoped => here it is in outer most so it is global scoped => hoisted
let b = 2; // ? let block scoped  => not hoisted
const c = 3; // ? const block scoped => not hoisted
const func = () => {
  const a = 10;
  console.log("a", a); // ? output 10 bcz const is block scoped
  let d = 4;
  console.log("i", i); // ? don't throw error bcz i is declared with var so it is hoisted . output undefined .
  if (d > 3) {
    // ? condition true
    const e = 5;
    if (true) {
      var f = 6; // ? f is declared with var so anywhere within func body we can access the value of f
      console.log("f", f); // ? output 6
    }
    let g = 7;
    console.log("g", g); // ? output 7
    d = 10; // ? we didn't specify any thing.so it will try to find the value of d in outer scope i.e. func scope it will find d is  set to 4 now it will update to 10 . if it won't find anywhere in the scope chain , it will store in global object in case of Node and window object in case of browser. this will throw error in strict mode
    console.log("d", d); // ? output 10
    console.log("e", e); // ? output 5
    console.log("h", h); // ? output undefined -> bcz value of h is not yet initialized . -> hoisted
  }
  console.log("f", f); // ? output 6 bcz declared with var
  //   console.log("g", g); // ! throw error bcz g is declared with let and it is accessible within if block
  var h = 8;
  var i = 9;
  console.log("d", d); // ? output 10
};

func();
