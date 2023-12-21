// 1.
console.log(`--------------First--------------`);

let nestedData = {
  innerData: {
    order: ["first", "second", "third"],
    snacks: ["chips", "fruit", "crackers"],
    numberData: {
      primeNumbers: [2, 3, 5, 7, 11],
      fibonnaci: [1, 1, 2, 3, 5, 8, 13],
    },
    addSnack: function (snack) {
      this.snacks.push(snack);
      return this;
    },
  },
};
// Using a for loop, console.log all of the numbers in the primeNumbers array.
console.log(`primeNumbers:`);
// > todo : optional chaining
if (
  nestedData &&
  nestedData.innerData &&
  nestedData.innerData.primeNumbers &&
  nestedData.innerData.primeNumbers
)
  nestedData.innerData.numberData.primeNumbers.forEach((num) =>
    console.log(num)
  );
// Using a for loop, console.log all of the even Fibonnaci numbers.
console.log(`even Fibonnaci numbers:`);
// > todo : do in one iteration
if (
  nestedData &&
  nestedData.innerData &&
  nestedData.innerData.numberData &&
  nestedData.innerData.numberData.fibonnaci
)
  nestedData.innerData.numberData.fibonnaci.forEach((el) => {
    if (el % 2 === 0) console.log(el);
  });
// Console.log the value "second" inside the order array.
console.log(
  `second order:${nestedData.innerData.order[1]} snack:${nestedData.innerData.snacks[1]}`
);
// Invoke the addSnack function and add the snack "chocolate".
nestedData.innerData.addSnack("chocolate");
console.log(nestedData);
console.log(nestedData.innerData.snacks);
// Inside of the addSnack function there is a special keyword called this. What does the word this refer to inside the addSnack function?
// ? this refers to the object on which the method is currently being called so here this refers to innerData object bcz it addSnack called in nestedData

// 2;

console.log(`--------------Second--------------`);
let nestedObject = {
  speakers: [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }],
  data: {
    continents: {
      europe: {
        countries: {
          switzerland: {
            capital: "Bern",
            population: 8000000,
          },
        },
      },
    },
    languages: {
      spanish: {
        hello: "Hola",
      },
      french: {
        hello: "Bonjour",
      },
    },
  },
  addSpeaker(speaker) {
    // < todo : add condition of arrays and null
    if (
      typeof speaker !== "object" ||
      speaker === null ||
      Array.isArray(speaker) ||
      !speaker.name
    ) {
      console.log("enter valid speaker with a name");
      return;
    }
    this.speakers.push(speaker);
    return this;
  },
  addLanguage(lang) {
    if (
      typeof lang !== "object" ||
      lang === null ||
      Array.isArray(lang) ||
      !lang[Object.keys(lang)[0]].hello
    ) {
      console.log("enter valid language");
      return;
    }
    // this.data.languages = { ...this.data.languages, ...lang }; // ? Object.assign is doing same thing. but here we have to perform traverse but in case of assign we don't.
    Object.assign(this.data.languages, lang);
    // this.data.languages[Object.keys(lang)[0]] = lang[Object.keys(lang)[0]];
    return this;
  },
  addCountry(country) {
    let countryName = country[Object.keys(country)[0]];
    if (
      typeof country !== "object" ||
      Array.isArray(country) ||
      country === null ||
      typeof country[Object.keys(country)[0]] !== "object" ||
      !Object.keys(countryName).includes("capital") ||
      !Object.keys(countryName).includes("population")
    ) {
      console.log("enter valid country");
      return;
    }
    Object.assign(this.data.continents.europe.countries, country);
    return this;
  },
};
// Write a function addSpeaker to add a speaker to the array of speakers. The speaker you add must be an object with a key of name and a value of whatever you'd like.
nestedObject.addSpeaker({ name: "om" });
console.log(nestedObject.speakers);

// Write a function addLanguage that adds a language to the languages object. The language object you add should have a key with the name of the language and the value of another object with a key of "hello" and a value of however you spell "hello" in the language you add.
nestedObject.addLanguage({ hindi: { hello: "namaste" } });
console.log(nestedObject.data.languages);

// Write a function addCountry that adds a European country to the countries object (inside of the continents object, inside of the countries object). The country you add should be an object with the key as name of the country and the value as an object with the keys of "capital" and "population" and their respective values.
nestedObject.addCountry({
  germany: { capital: "Berlin", population: 83_000_000 },
});
console.log(nestedObject.data.continents.europe);
