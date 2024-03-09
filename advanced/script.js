//Template litereals  strings
/*
function greetings() {
  return `hello buddy`;
}

console.log(`greetings : ${greetings()}`); 
//practice

const Template = `the quick 
                  brown fox
                  jumbs over
                  the lazy dog
                  `;

let firstName = "super";
let lastName = "man";
console.log(`${firstName} ${lastName}`); 

//arrow functions  es6

greet = (username) => {
  return `${username}`;
};
console.log(greet("i am on"));

//practice

setTimeout(() => {
  console.log("hello");
}, 2000); 

//Enhance Object literials

const user = (name, age, work) => {
  //key and value has same
  return {
    name,
    age,
    work,
    intro() {
      console.log("working");
    },
  };
};

const person = user();

console.log(person.intro()); 

let lib = {
  sum(a, b) {
    return a + b;
  },
  multi(a, b) {
    return a * b;
  },
};

console.log(lib.sum(4, 7));
console.log(lib.multi(2, 2)); 

const getperson = (name, age, height) => {
  return {
    name,
    age,
    height,
  };
};

const person = getperson("dev", 19, 128);
console.log(person);


//Default Parameters

const count = (count = false) => {
  if (count == true) {
    for (let i = 0; i < 5; i++) {
      console.log(`Count is ${i}`);
    }
  }
};
count(true); 

//practice

const multiply = (a, b = 8) => {
  return a * b;
};

const res = multiply(2);
console.log(res); 

//for in loop

const object = { a: 1, b: 2, c: 3 };

for (let properties in object) {
  console.log(`${properties} :${object[properties]}`);
} 

//for of loop

let peoples = ["person1", "person2", "person3"];

for (let people of peoples) {
 console.log(people);
} 

const text = "hello";

for (const char of text) {
  console.log(char);
} 

const array1 = ["a", "b", "c"];

for (let arr of array1) {
  console.log(arr);
}  

//For Each loop  //Array each method

const colors = ["teal", "blue", "red", "green"];

colors.forEach((person) => console.log(person)); 

//Whatever  is inside

const words = ["hello", "bird", "table", "football", "pipe", "code"];

const capWords = words.forEach((word, index, arr) => {
  arr[index] = word[0].toUpperCase() + word.substring(1);
});

console.log(words); 




//array each method
let num = [1, 2, 3, 4, 5];

let sum = 0;

const add = (num) => {
  sum += num;
};

for (let i = 0; i <= 0; i++) {}

num.forEach(add);
console.log(sum);
*/

//map method
