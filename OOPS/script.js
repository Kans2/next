//OOPS concept  (language model/style objects rather than "actions")

//designing and structring the code around objects and interactions, programming paradigm using object and class.
//console.log(this);
//console.log(this === window);
/*window.firstName = "lion";
this.lastName = "jungle";
console.log(window); 

const obj = {
  firstName: "kannan",
  lastName: "dev",
  fullName: function () {
    return this;   //owner object  return the whole
  },
};

const res = obj.fullName();

console.log(res);  

const obj = {
  firstName: "kannan",
  lastName: "dev",
  fullName: () => {
    return `${this.firstName} ${this.lastName}`; //this is refering on window object
  },
};

const res = obj.fullName();

console.log(res);  */

//practice
/*
const person = {
  name: "user1",
  age: 20,
  greetRegular: function () {
    return `Hello, my name is ${this.name} & I'm ${this.age} years old.`;
  },
  greetArrow: () => {
    return `Hello, my name is ${this.name} & I'm ${this.age} years old`;
  },
};

const res = person.greetRegular();
const out = person.greetArrow();

console.log(res);
console.log(out);*/

//Factory function is type function that is used to create and return the objects.
//Its design pattern that provides an Alternative way to create objects compared to using constructors and the new keyword..
/*
function createProfile(firstName, Age, experience) {
  return {
    Name: firstName,
    Age: Age,
    year: experience,
    function: function () {
      console.log(
        `Hi buddy! My name is ${this.Name}.  I am just ${this.Age} year old.I am in this field in ${this.year}.`
      );
    },
  };
}

const person = createProfile("jhon", 30, 2);

//console.log(person);
//person.function();

//practice
function vechicles(type, brand, model, year) {
  return {
    type1: type,
    brand1: brand,
    model1: model,
    year1: year,
  };
}
const vehicle1 = vechicles("racing cars", "Koesnieg", "Supra", 2024);

console.log(vehicle1);  */

//CONSTRUCTOR
//-- Constructor is regular function use with    $new keyword   to create and initialize objects shared properties and method.
//--Blue brint for creating multiple instances of object structre and behaviour.

/*
function PlayerHistory(score, matches, wins) {
  this.score = score;
  this.matches = matches;
  this.wins = wins;
  this.info = function () {
    console.log(
      `the player score is ${this.score}. going to the Action in ${this.matches}.to Winning the matches are ${this.wins}`
    );
  };
}

//NEW KEYWORD
//1. First create empty object
//2. sets "this" to point to that object
//3.We can omit return statement using "new" keyword

const player1 = new PlayerHistory(1000, 100, 100);

//console.log(player1);
player1.info();   

function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.getInfo = function () {
    return `${this.title} by ${this.author} ${this.year}`;
  };
}

const Book1 = new Book("Love", "miles", 2005);

const res = Book1.getInfo();

console.log(Book1); 

//PRACTICE
function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.info = function () {
    return `The Name is ${this.name}. age is ${this.age} gender Is ${this.gender}`;
  };
}

const person1 = new Person("robert", 20, "Male");

console.log(person1);

console.log(person1.info());  

function Car(make, model, year, color) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.Strat = function () {
    return `Strarting the ${make} ${model}...`;
  };
  this.Stop = function () {
    return `Stooping the ${make} ${model}.`;
  };
}

const car1 = new Car("Supra", "Gtr-7");

console.log(car1.Strat()); 
console.log(car1.Stop()); */

//BUILT IN CONSTRUCTORS
// native-constructors,Create object of various data type. available in Globaly do not need explicity
//Primitive data types & built in objects.
/*
//Data types
const num1 = new Number(100);
console.log(num1);
const st1 = new String("developer");
console.log(st1);
const bool = new Boolean(false);
console.log(bool);
const Arr = new Array(1, 2, 3, "hi");
console.log(typeof Arr); */

/*
//OBJECT.CREATE() --> method creates a new object, using an prototype of newly created object

let person = {
  greet: function () {
    return `Hi! my name is ${this.Name} ${this.lastName}`;
  },
};

const person1 = Object.create(person);

person1.Name = "kannan";
person1.lastName = "developer";

const res = person1.greet();
console.log(res);

let jhon = Object.create(person, {
  Name: { value: "Jhon" },
  lastName: { value: "Doe" },
});

const res1 = jhon.greet();
console.log(jhon);
console.log(res1);  */

//PROTOTYPE

//every javascript object has anonyms proprty called prototype
//Remember functions & arrays are also a object
//this is an Parent of an object, protype is object itself, Special properties and Methods

//const obj = {};
//console.log(obj);

//We can check prototype
//--> obj._proto_
//-->obj.constructor.protoype()
//-->Object.getPrototypeOf(a)

//console.log(obj.__proto__);

//********************* Changing the built in Method
/*
Array.prototype.pop = function () {
  return "Pop it up baby";
};

const myArr = ["one", "two", "three"];
console.log(myArr.pop());  

String.prototype.hello = function () {
  console.log(this);
  console.log(this.toUpperCase());
};

console.log("hello and welcome".hello());  */

//PROTYPAL INHERITANCE
//==> mechanism in javascript that allows objects to inherit properties and method for other objects.
//--> heirachical chain of inheritance  (parent to the child);
/*
function Animal(name) {
  this.name = name;
}

Animal.prototype.sound = function () {
  return "Animal Sound";
};

const animal1 = new Animal("Frog");
console.log(animal1.sound());

//Doggy
function Dog(name, breed) {
  Animal.call(this, name); //Inheritance
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype); //this method is newly created to the partent.

const dog1 = new Dog("Huskey", "Good");
console.log(dog1.sound());   */

//CLASSES
//-->classes are one of features introduced in es6 version of javascript
//--> class is a blueprint of the object. you can create an object from the class
//-->think of an class sketch (protype) of house. it contains floors,doors,windows,etc..
//--> many house can made from the same description. many objects from a class
/*
//CLASS DECLARATION
class Person {
  constructor(firstName, lastName, age) {
    //Instances Members
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.info = function () {
      return `${this.firstName}. ${this.lastName} ${this.age}`;
    };
  }

  //prototype method
  greet() {
    return `hello there ${this.firstName} ${this.lastName}`;
  }
}
//classes in inheritance

class Progremmer extends Person {
  constructor(firstName, lastName, age, pl, experience) {
    super(firstName, lastName, age); //call the parent constructor
    this.pl = pl;
    this.experience = experience;
  }
}

const kans = new Progremmer("kans", "dev", "19", "javascript", 2);
console.log(kans.greet());

const jhon = new Person("kans", "dev", 20);
console.log(jhon.greet());  */

class Hero {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }
  greet() {
    return `hi ${this.name} level:${this.level}`;
  }
}

class Mega extends Hero {
  constructor(name, level) {
    super(name, level);
  }
}

const person1 = new Mega("Ben", 100);

console.log(person1);
console.log(person1.greet());
