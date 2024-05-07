//MODIFIERS

//--> class modifiers , also known as access modifiers or visibility modifiers
//-->key words (fields,method,nested classes)
//-->Encapsulation restricting direct Access to certain class members
//1)private    2)public  3)protected
/*
function Myclass(publicField, privateField, protectedField) {
  //Public field
  this.publicField = publicField;

  //private field(closure)
  const _privateField = privateField;

  //protected field
  const _protectedField = protectedField;

  //public method
  this.publicMethod = function () {
    return `Public Field:${this.publicField}`;
  };

  //Private method (closure)
  function _privateMethod() {
    return `Private Method: ${_privateField}`;
  }

  //Protected Method
  function _protectedMethod() {
    return `Protected Method:${_protectedField}`;
  }

  //Method to access protected method
  this.accessprotectedMethod = function () {
    return _protectedMethod();
  };
}

const obj = new Myclass("public data", "private data", "protectec data");

//console.log(obj.publicField);
//console.log(obj._privateField);
//console.log(obj._protectedField);

//console.log(obj.publicMethod());
//console.log(obj._privateMethod());
//console.log(obj.accessprotectedMethod());  */

//OOP CONCEPTS ADVANCED

//1--->ENCAPSULATION
//2--->ABSTRACTION
//3--->INHERITANCE
//4--->POLYMORPHISM
/*
//Encapsulation is the concept of binding of the data & methods togethr with an object ,allowing with object control accees to

//closure get an private members(Encapsulation)

function Counter() {
  let _count = 0; //Private variable

  //public method that can acces and modify the private variable
  this.increment = function () {
    _count++;
  };
  this.decrement = function () {
    _count++;
  };
  this.getCount = function () {
    return _count;
  };
}

const counter = new Counter();

console.log(counter.getCount());
counter.increment();
counter.decrement();
console.log(counter.getCount());   */

//ABSTRACTION
//---> abstraction means is the process pf simplifiying complex system by breaking them down into
//---->smaller,managable parts

//Abstract class(providing a blueprint for subclasses)
/*
class Animal {
  constructor(name) {
    this.name = name;
  }

  //Abstract method (to be implemented by subclasses)
  makeSound() {
    throw new Error("Method(makesound) must be implemented");
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  //Implementing the abstract method
  makeSound() {
    return "Woff";
  }
}

//Concrete subclass
class Cat extends Animal {
  constructor(name) {
    super(name);
  }
  makeSound() {
    return "Meow";
  }
}

const dog = new Dog("buddy");
console.log(dog.name);
console.log(dog.makeSound());

const cat = new Cat("kity");
console.log(cat.name);
console.log(cat.makeSound());
*/

//INHERITANCE

//--> inhritance allows sub classes and (re use)
/*
//Es5 code

function Animal(name) {
  this.name = name;
}

//Method among all Animal Instances

Animal.prototype.makeSound = function () {
  return "unknown sound";
};

//Subclasses constructor inherit from Animal
function Dog(name) {
  Animal.call(this, name); //call the superclass constructor
}

//Setuo prototype chain for Dog to inherit from Animal
Dog.prototype = Object.create(Animal.prototype);

//Method specific
Dog.prototype.makeSound = function(){
  return "Woff";
} 

//instances of classes

const genericAnimal = new Animal("Generic Animal");
const dog = new Dog("buddy");
console.log(dog);
*/
