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
