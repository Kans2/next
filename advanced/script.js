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

//map method
//using creating the new array with results every element in calling

let numbers = [1, 2, 3, 4, 5];

let double = numbers.map((num) => num * 2);

console.log(double); 

let peoples = [
  { firstName: "Macom", lastName: "Reynolds" },
  { firstName: "Kaylee", lastName: "Frye" },
  { firstName: "Jayne", lastName: "Cobb" },
];

const results = peoples.map((person) => {
  return [person.firstName, person.lastName];
});
console.log(results); 
const Numbers = [1, 2, 3, 4, 5, 6, 7];

//const multiply = Numbers.map((total) => total * 10);

//console.log(multiply);

function Add(num) {
  return num * 10;
}

const Total = Numbers.map(Add);

console.log(Total);   
//Filter method using

//specific object or array data is to filter in to be an filter method

const songs = [
  { name: "Lucky you", duaration: 4.34 },
  { name: "Just like you", duaration: 3.23 },
  { name: "The Search", duaration: 2.34 },
  { name: "Old Town Road", duaration: 5.32 },
];

console.log(songs.filter((song) => song.duaration > 4)); 

// this is using as amazon for sale the laptops
const computers = [
  { ram: 4, hdd: 200 },
  { ram: 8, hdd: 400 },
  { ram: 10, hdd: 600 },
  { ram: 128, hdd: 1200 },
];

console.log(computers.filter((com) => com.ram >= 10)); 

const ages = [32, 33, 16, 40];

function isAdult(age) {
  return age > 18;
}
const res = ages.filter(isAdult);
console.log(res); 

//practice

const words = [
  "spray",
  "limit",
  "elite",
  "exuberment",
  "destruction",
  "present",
];

function isWord(words) {
  return words.length > 6;
}

const res = words.filter(isWord);

console.log(res); 

//find method is built in array using specefic

const peoples = [
  { name: "huxn", age: 17 },
  { name: "jhon", age: 18 },
  { name: "alex", age: 20 },
  { name: "jimmy", age: 30 },
  { name: "alex", age: 30 },
];

const res = peoples.find((person) => person.name == "alex");

console.log(res); 

//practice
const ages = [3, 10, 18, 20];

function isAdult(age) {
  return age > 18;
}

const res = ages.find(isAdult);

console.log(res); 
let products = [
  { name: "checkers", catagory: "Toys" },
  { name: "Harry Potter", catagory: "Books" },
  { name: "iPhone", catagory: "Electronics" },
  { name: "Learn Golang", catagory: "Books" },
];

const res = products.find((mind) => mind.catagory == "Books");

console.table(res);  

//every method and some

const peoples = ["huxn", "jhoncena", "alex"];

const res1 = peoples.every((person) => person.length == 4);

//console.log(res1);

const res2 = peoples.some((person) => person.length == 4);  //any one element true
console.log(res2); 

//Array Reducer function
const number = [1, 2, 3, 4, 5, 6, 7];    //previous and current

const sum = number.reduce((p, c) => {
  console.log(`Previous; ${p}`);
  console.log(`Current; ${c}`);
  return p + c;
}, 0);

console.log(sum); 

const words = ["apple", "banana", "orange", "banana", "apple", "grape"];

const wordFrequency = words.reduce((frequencyMap, word) => {
  frequencyMap[word] = frequencyMap[word] || 0 + 1;
  return frequencyMap;
}, {});

console.log(wordFrequency); 

let numbers = [1, 2, 3, 4, 5];

const calculatedProduct = numbers.reduce((p, c) => {
  return p + c;
}, 0);

console.log(calculatedProduct);  

//map data structres
//it is built in key value ,iterations
const map = new Map();
//console.log(map);

//keys declare

const keyOne = "String";
const keyTwo = {};
const keyThree = function name(params) {};

map.set(keyOne, "value of key one");
map.set(keyTwo, "the value of key two");
map.set(keyThree, "value of the keyThree");
//console.log(map);

//console.log(map.keys()); //finding keys
//console.log(map.values()); //finding values
//console.log(map.delete(keyTwo));  //any keys to want delete
console.log(map.size);
console.log(map);

//Iterating through map

for (let [key, value] of map) {
  console.log(`${key}--${value}`);
}

for (let key of map.keys()) {
  console.log(key);
}

for (let value of map.values()) {
  console.log(value);
} 

//paractice

const map = new Map();

map.set("a", 1);
map.set("b", 2);
map.set("c", 3);
//console.log(map.get("a"));

console.log(map);
console.log(map.size);
console.log(map.delete("b"));
console.log(map.size); 

//set is an buit in function data structre
//removes the dublicates in array are the values unique values

//const values = [1, 2, 3, 3, 4, 4, 4, 4, 5, 6, 6, 6, 6, 6];
const Myset = new Set();

Myset.add("apple"); //add method
Myset.add("orange");
Myset.add("banana");

//console.log(Myset.has("orange"));   //true or false

//using to delete
console.log(Myset.delete("orange"));

//to clear
//Myset.clear();

for (let item of Myset) {
  console.log(Myset);
}  

//Practice

const Letters = new Set();
Letters.add("a");
Letters.add("b");
Letters.add("c");

for (let item of Letters) {
  console.log(item);
}   

//Symbol is an unique immutable data type

//const mySymbol = Symbol("my symbol");
//console.log(mySymbol);

//Comparing the symbol

const mySymbol1 = Symbol("name");
const mySymbol2 = Symbol("name");

const obj = {};

obj[mySymbol1] = "value1";
obj[mySymbol2] = "value2";

console.log(obj);

const symbol1 = Symbol("name");
const symbol2 = Symbol("name");

const person = {};

person.age = 18;
person["gender"] = ["female"];
person["gender"] = ["male"];

person[symbol1] = "alex";
console.log(person); 

//practice

const newSymbol = Symbol("foo");

console.log(typeof newSymbol);

const obj = {};

obj[Symbol("foo")] = "some foo";
console.log(obj); */

//const Number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//for (let i = 0; i <= Number.length; i++) {
//console.log(i++);
//}

const colors = ["teal", "blue", "red", "green"];

colors.forEach((person) => console.log(person));

let num = [1, 2, 3, 4, 5];

let sum = 0;

const add = (num) => {
  sum += num;
};

num.forEach(add);

console.log(sum);
