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
*/


//Scope in javaScript
