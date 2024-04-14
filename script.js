/*
//string methods use 


//1.concat
     let firstName = "aravind";
     let secondName="aiysha";
     let fullName = firstName.concat(secondName);
     console.log(fullName);

//2.append
   
firstName  += "somthing else";
console.log(firstName);


//3.check lkength
  console.log(firstName.length);

//4.cases

console.log(firstName);     // use that like uppercase lower case

console.log(firstName.toLowerCase());
console.log(firstName.toUpperCase());

//5.slice

 console.log(firstName.slice(0,4));

//6.splilt

console.log(firstName.split('').join(""));  // like array representation


//7.includes

  console.log(firstName.includes("X"));  //x iruntha true 

//8.Trim

console.log(firstName.trim);      //remove spaces
console.log(firstName.trim());


//bacticks

let text = `multiple line represnting in one line`;

fullName = `${firstName} ${secondName}`;

console.log(fullName);


//practice 
let actorName = "andrew";
let actorSkills = "dance";

let Person = actorName.concat(actorSkills);
 let uppercasae = Person.toUpperCase();
 let message = `The Actor details is ${Person}`;

 message += `hero updatte for this year `;

 console.log(message);


 //type conversion

 let money = "50";

 money = parseInt(money);  // convert a string into an number
 money = Number(money);
 money = +money; //convert a string to num
 console.log(typeof money);  // to find what type of



 //convert number into string

 let bill = 50;
 bill = bill.toString();  // number into string
 console.log(bill)
 console.log(typeof bill);


 //convert string to a decimal

  let num = "40.333";
   
  num = parseFloat(num);   //using string to decimal convert

  console.log(num); */

//conditional statements
/*
  let time = 10;
  let greetings;   //this use of to follwing valu4es

  if(time < 10){

    greetings="good morning";
    console.log(greetings);
  }
  else if (time < 20){

    greetings ="GOOD DAY"
    console.log(greetings);
  }
  else{
    greetings = "Good Evening";
    console.log(greetings)
  }
  


  //practice
  let password = 9;
  if (password == 8){

    password ="Welcome";
    console.log(password);
  }
  else if (password < 8){

    password="Password is too short";
    console.log(password);
  }
  else if (password > 8){

    password ="Password is tto long it should be 8 characters";
    console.log(password);
  }
  else
  {
    password = "Please provide the password";
    console.log(password);
  } 

//Switch Statements

let x = 0;
let bulb;

switch(x){
  case 0:
    bulb = "off";
    console.log(bulb);
    break;
  case 1:
    bulb = "on";
    console.log(bulb);
    break;
  default:
    bulb = "no value found";
    console.log(bulb);
    break;
}   

//practice
let fruite = "Orange";
switch (fruite){

  case "Banana":
    console.log('this is Banana');
    break;
  case "Apple":
    console.log("how you like the Apples");
    break;
  case "Orange":
    console.log("this is Orange");
    break;
   default:
    console.log("i dont know this friute");
    break;

}


//for loop
//for (initial express; condition ; incremental expression;){}

for (let i=0; i<= 1000; i++) {
  
  console.log("hello world",i);
  
} 

//while loop
let i = 1;
while (i<=5) {

  console.log("hello world ", i)
  i++;
}  

let i = 10;

while (i <= 100){
  console.log("hello", i);
  i++;
}  

//Do while loop
let i= 0;
do{
  console.log("hello ",i);
  i++;
}
while (i<=5); 

//Logical Operators

//1. --> AND (&&)   //both true 

const a = true;
const b = false;
const c = 4;
//console.log(a && b);
//console.log(c<6 && c >1);

//2. --> OR (||)   //either is true , both are false give false
//console.log(a || b); 

//3. --> NOT (!)   // like toogler

//console.log(!b); 


//Arrays
  //const mylist = [];
  //console.log(mylist);

//const array = ["helolo", "how",["fun", "like"]]

//Array Techniques
 //1.--> Push() add items to array like array.push("sun");
 //2. --> pop() remove one item from array
//3. --> shift()  removing the firsts item from array array.shift();
//4. --> concat () adding more than one array array.concat(arra2);

// array irukanu find array.includes('Go');
// console.log(array.join('k'));

//reverse  
//const array =[1,2,3,4,5]
//console.log(array.reverse());

//console.log(array.sort());  //sorting technique

//Objects
const person = {

  firstName :'proffesor',
  lastName : 'thomas',
  age : 18,
  location : ['Planet', 'Earth'],
  isProgemer : true,
};

//adding one more properties

person.available = true
console.log(person);

//To delete the info

delete person.firstName;
console.log(person);


//Practicing
const car = {
  type:'',
  model:7,
  color:'black',
}
console.log(typeof car);
car.type = "Toyota"
car.Wheels = 'spin'
console.log(car); 

function greetings(person){  //parametre


  console.log(`welcome buudy to return ${person}`);

}
greetings("coder"); //passing arguments




//functions
const items = {
  Veg :7,
  Non_veg :10,
  Water : 2,

}
function add(prices) {
  
  let total = 0;
  for (let item of prices) {

    total += items[item];
  }
  return total;
     
}

const order = ['veg','nonVeg','water'];
const Totalprice  = add(order);
console.log('Total price is',Totalprice);

//function Expresssion

const greetings = function (user){

  console.log(`hello ${user}`);
}
greetings ('user'); 

//call back function

function show(name , cb) {

  console.log(`HELLO ${name}`);
  cb()
  
}
function cb(){

  console.log(`I am an callBack function`);
}
show ('buddy',cb);


//Scope in javaScript


//Object methods

function greet(){
  return `hello , my name is ${person.name} & I am ${person.age} yreas old`
}
const person = {
  name : "remo",
  age:18,
  greet,
};
console.log(person.greet()); 

let Game = {
   
  sport : "football",
  skill : "striker",
  Details : function(){
    return `My Game is ${Game.sport} & my Position is ${Game.skill}` ;
    
  },

}
console.log(Game.Details());  

//JSON IN JAVASCRIPT
const person = {
  name: "stephen",
  age: 20,
  email: "sample@.com",
  subscribed: true,
  hobbies: ["Scientist", "reserch", "code"],
  address: {
    city: "New york",
    idk: true,
  },
};

//Json.stringify() --> convert object into json formot
console.log(JSON.stringify(person));

//parsing  revert to object

console.log(JSON.parse(JSON.stringify(person)));



const Day = new Date(2024, 2, 24, 12, 30, 0, 0); //date constructor

console.log(Day); 

let Day = new Date();

let hour = Day.getHours();
let year = Day.getFullYear();
let month = Day.getMonth();
let day = Day.getDay();
let minutes = Day.getMinutes();
console.log(
  `Year is ${year} the month is ${month} the day is ${day} the minutes is ${minutes} `
); 

//To string representation

const Day = new Date();

//console.log(Day.toDateString());

//console.log(Day.toLocaleString());

Day.setDate(Day.getDate() + 1);

console.log(Day); 

//set Intervel and set Time out

let time = setInterval(
  () => console.log(`this run again after 2 minutes`),
  2000
);

setTimeout(function () {
  clearTimeout(time);
  console.log("hello");
}, 10000); 
//Spread Operator

function giveme4(a, b, c, d) {
  console.log("a", a);
  console.log("b", b);
  console.log("c", c);
  console.log("d", d);
}

const fruites = ["avacado", "apple", "banana", "lichi"];

giveme4(...fruites); //... spread operator
//giveme4(1, 2, 3, 4); 

//using Arrays
const fruites = ["avacodo", "grapes", "watermelon", "orange"];
const food = ["rice", "noodels", "chicken", "mutton"];
const order = [...fruites, ...food];
console.log(order);

//Spread opr using objects

const obj1 = { x: 1, y: 2, z: 3 };

const obj2 = { name: "ronaldo" };

const obj3 = { ...obj1, ...obj2 };

console.log(obj3); 

let arr = [1, 2, 3];
let arr2 = [4, 5];

const clone = [...arr, ...arr2];

console.log(clone);

const user = {
  name: "jhon",
  age: 22,
};

const copy = { ...user };
console.log(copy); 

//Rest opr variadic function
function user(x, ...Userdata) {
  console.log(x);
  console.log(Userdata);
}
user("hello", 2024, "what next"); 

function person(firstName, lastName, ...hobbies) {
  console.log("firstanme:", firstName);
  console.log("lastname:", lastName);
  console.log("Hobbies:", hobbies);
}
person("kannan", "rio", "football", "singing", "drawing");

function variadic(...params) {
  console.log(params);
}
variadic("hello", "welcome");
console.log(2024, 2050, ["one"]); 

//Destruction to Arrays and Objects (unpick data diffrent datas)

//Arrays
const users = ["user1", "user2"];

const [user1, user2] = users; //destructred

console.log(user1, user2);

const [red, yellow, green] = users;

console.log(red); 

let a, b;
[a = 5, b = 10] = ["one"]; //default values ARRAY DESTRUCTRE

console.log(b); 

//using functions
function f() {
  return [2, 4];
}
let c, d;
[c, d] = f();

console.log(c);
console.log(d); 

//Ignore the value form an return

function f() {
  return [4, 5, 6];
}

const [a, , c] = f();

console.log(a);
console.log(c); 

//Assinging the rest of an Array to a variable

const [a, ...b] = ["one", "two", "three"];
console.log(b); 

//practice

const colors = ["red", "green", "yellow", "blue", "orange"];

const [color1, color2, color3] = colors;

console.log(color1, color2, color3); 

//Object Destructuring

const student = { name: "kans", position: "first", hobby: "programming" };

const { hobby } = student;

console.log(hobby); 

//practice

const person = {
  name: "Jhone Doe",
  age: 30,
  gender: "male",
  country: "USA",
};

const { name, age, country } = person;

console.log(name, age, country); 

//renaming the object

const num = { x: 100, y: 200 };

const { x: new1, y: new2 } = num; //rename the variables

console.log(new1, new2); 

//Object sestructring and rest operator

let { a, b, ...rest } = { a: 1, b: 2, c: 20, d: 40, e: 70 };

console.log(rest); 

//function Destructig

const person = {
  name: "jhon Doe",
  age: 20,
  country: "USA",
};

function personInfo({ name, age, country }) {
  console.log(`Name:${name}`);
  console.log(`Age:${age}`);
  console.log(`Country:${country}`);
}
personInfo(person); 

//nested destructring

const songs = [
  {
    name: "Lucky you",
    singer: "anirudh",
    duration: 30,
  },

  {
    name: "just like you",
    singer: "ar rahman",
    duration: 30,
  },
  {
    name: "enie menie",
    singer: "justin",
    duration: 30,
  },
  {
    name: "kid lario",
    singer: "justin",
    duration: 0.5,
  },
];

const [, , { name }] = songs;

console.log(name); 

// Extracting data using object destructuring
const {
  user: {
    name,
    age,
    address: { city, country },
    hobbies,
    scores: { math, science, history },
    email,
  },
  products: [product1, product2, product3],
  settings: {
    darkMode,
    notifications: {
      email: emailNotifications,
      sms: smsNotifications,
      push: pushNotifications,
    },
    language,
  },
} = data;
*/

/*
// Logging the extracted data using template literals
console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Address: ${city}, ${country}`);
console.log(`Hobbies: ${hobbies.join(", ")}`);
console.log(`Math Score: ${math}`);
console.log(`Science Score: ${science}`);
console.log(`History Score: ${history}`);
console.log(`Product 1: ${product1.name} - $${product1.price}`);
console.log(`Product 2: ${product2.name} - $${product2.price}`);
console.log(`Product 3: ${product3.name} - $${product3.price}`);
console.log(`Dark Mode: ${darkMode}`);
console.log(`Email Notifications: ${emailNotifications}`);
console.log(`SMS Notifications: ${smsNotifications}`);
console.log(`Push Notifications: ${pushNotifications}`);
console.log(`Language: ${language}`);

const data = {
  user: {
    id: 123,
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    address: {
      city: "New York",
      country: "USA",
    },
    hobbies: ["Reading", "Painting", "Cooking"],
    scores: {
      math: 95,
      science: 88,
      history: 75,
    },
  },
  products: [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Tablet", price: 500 },
  ],
  settings: {
    darkMode: true,
    notifications: {
      email: true,
      sms: false,
      push: true,
    },
    language: "English",
  },
};

const {
  user: {
    id,
    name,
    address,
    email,
    address: { city, country },
  },
  products: [product1, product2, product3],
} = data;

console.log(`the product details is ${product1.name}-${product1.price}`); 

//Ternary Operator : ?

function password(ps) {
  return ps === 8
    ? `Strong password`
    : `password should be atleast 8 characters`;
}

const res = password(3);

console.log(res);  

function f(person) {
  return person === "money" ? `buy products` : `bring some money`;
}

const res = f("money");

console.log(res);   
let Money = false;
let haveMoney = Money === true ? `buy products` : `bring some money bro`;

console.log(haveMoney);   

//for in loop

let person = {
  name: "robort",
  age: 20,
  gender: "male",
};

for (let keys in person) {
  console.log(keys, person[keys]);  
} 

let list = ["one", "two", "three", "four"];

for (let index in list) {
  console.log(`${index}: ${list[index]}`);
}  

const object = { a: 1, b: 2, c: 3, d: 4 };

for (let keys in object) {
} */
const person = {
  name: "stephen",
  age: 20,
  email: "sample@.com",
  subscribed: true,
  hobbies: ["Scientist", "reserch", "code"],
  address: {
    city: "New york",
    idk: true,
  },
};

const response = JSON.stringify(person);
console.log(response);
console.log(JSON.parse(response));
