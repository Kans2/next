//Synchronous
//--> synchronous javascript refers to traditional way to represent the Executing the javascript code
//-->each line excuted one line after another
/*
function addNumbers(a, b) {
  return a + b;
}
function multiplyNumbers(c, d) {
  return c * d;
}

const result1 = addNumbers(2, 3);
const result2 = multiplyNumbers(result1, 3);

console.log(result2); */

//ASYNCHRONOUS
//---> Asynchronous programe javascript executed ****independently from the main programe flow
//like callbacks,promises, and async/await    allow developers to asynchronous operations efficiantly

//EXAMPLES
/*
function myfunc() {
  console.log("Inside function");
}

console.log("Strat");
myfunc();
console.log("End"); 

//Async code 

console.log("Strat");

setTimeout(() => {
  console.log("inside SetTimeout");
}, 2000);

console.log("End");  */

/*
//CALLBACK HELL
function callbackHell(callback) {
  setTimeout(() => {
    const data = "Inside (callback hell) function";
    console.log(data);
    callback(data); //passing the data into in parameter
  }, 2000);
}

function firstFunc(data, callback) {
  setTimeout(() => {
    const processData = `${data}-Procedd First`;
    console.log(`Inside (firstName) Function`);
    callback(processData);
  }, 1000);
}

function secondFunc(data, callback) {
  setTimeout(() => {
    const processedData = `${data}-Processsed Second`;
    console.log("Inside (secondFunc) Function");
    callback(processedData);
  });
}

//Callback hell
callbackHell((data) => {
  firstFunc(data, (processData1) => {
    secondFunc(processData1, (processData2) => {
      console.log(`Final result:${processData2}`);
    });
  });
});  */

/*
//Practice
console.log("Start");

function getUserDataFromDB(name, callback) {
  setTimeout(() => {
    console.log(`Getting user Name ...`);
    callback(name);
  }, 2000);
}

function getUserHobbies(name, callback) {
  setTimeout(() => {
    console.log(`Getting user Hobbies....`);
    callback(["Football", "Reading", "Singing"]); ///using the arrays
  }, 2000);
}

getUserDataFromDB("name", (data) => {
  console.log(data);
  getUserHobbies(data, (hobby) => {
    console.log(hobby);
  });
});

console.log("End");   */

//PROMISE
//  >>> Promise is an object representing the eventual completion .
//  >>> failure of an asynchronous operation

//NEW PROMISE

//A javascript Promise object contains both the producing code and consuming code
//Deal with Asynchronous operation Javascript

//>>>>3 States like     1)pending       2)Fullfilled/Resolved     3)Rejected

//Initial state , not yet Fullfill or Reject
//promise complete
// promise Fail

//1)------>Resolveed ******* .then() .finally()
//2)------->Rejected *******   .then() .catch() .finally()

//Syntax
//new Promise ((resolve,reject)=>{})

new Promise((resolve, reject) => {
  //Async Operations
  resolve(value);
  reject(Error);
});

//.then()  successFull outcome of a promise (onFullfilled,onRejected)
//.catch()  method is using promise & dael with Rejected case only

const promiseObj = new Promise((resolve, reject) => {
  let req = true;
  req == true ? resolve("Request Succesfull") : reject("Request rejected");
})
  .then((value) => console.log(value))
  .catch((error) => console.log(error));

//EXAMPLE

function CheckNumber(number) {
  return new Promise((resolve, reject) => {
    //Constructor or Class
    if (number % 2 === 0) {
      resolve(`${number}is an even number`);
    } else {
      reject(`${number} is an odd number`);
    }
  });
}

const check = 6;
CheckNumber(check)
  .then((message) => {
    console.log(`Success:${message}`);
  })
  .catch((error) => {
    console.log(`Error:${error}`);
  });
