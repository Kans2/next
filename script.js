/*//string methods use 


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

*/


