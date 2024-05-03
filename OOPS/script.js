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
console.log(out);   */
