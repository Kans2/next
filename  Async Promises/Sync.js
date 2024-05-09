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
/*
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


  
//ANOTHER EXAMPLE
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = "Insidide (CallbackHell) function";
      console.log(data);
      resolve(data);
    }, 2000);
  });
}

function firstFunc(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const ProcesssedData = `${data}-Processed data`;
      console.log("Inside firstfunction");
      resolve(ProcesssedData);
    }, 2000);
  });
}

function secondFunc(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const ProcesssedData = `${data}-Processed data`;
      console.log("Inside Secondfunction");
      resolve(ProcesssedData);
    }, 1500);
  });
}

fetchData()
  .then((data) => firstFunc(data))
  .then((ProcesssedData1) => secondFunc(ProcesssedData1))
  .then((ProcesssedData2) =>
    console.log(`Final result with Promise:${ProcesssedData2}`)
  )
  .catch((error) => console.log(`Error: ${error}`));   */
/*
//PRACTICE

console.log("Start");

function getUserDataFromDB(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Getting User Name...");
      resolve(name);
    }, 2000);
  });
}

function getUserHobbies() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Getting user Hobbies....");
      resolve(["Reading", "Writing", "Travel"]);
    }, 2000);
  });
}

getUserDataFromDB("person1")
  .then((name) => getUserHobbies(name))
  .then((hobby) => console.log(`the hobby is ${hobby}`))
  .catch((err) => console.log(`Error does not get info:${err}`));  */

//ASYNC FUNC
//--->async is a special function that is designed to operate asynchronously
//--->Async is a keyword use to turn declartion into async function

//AWAIT
//--> await operator is used to wait for promise. it can only be used inside.
//--> async function within regular Javascript code.
/*
function fetchDataFromServer() {
  setTimeout(() => {
    return new Promise((resolve, reject) => {
      resolve("User data recieved from the server.");
    });
  }, 4000);
}

async function getUserData() {
  try {
    const data = await fetchDataFromServer(); //api or large amount of data
    console.log(data);
    console.log("Remaining task can be excuted here");
  } catch (error) {
    console.log(error);
  }
}

getUserData().then().catch();   */

/*
function callbackHell() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = `Inside (callbackHell) function`;
      console.log(data);
      resolve(data);
    }, 2000);
  });
}

function firstFunc(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const processedData = `${data}-Processed first`;
      console.log("Inside (firstfunc)");
      resolve(processedData);
    }, 2000);
  });
}

function secondFunc(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const processData = `${data}-Processed Second`;
      console.log(`inside second function`);
      resolve(processData);
    }, 1500);
  });
}

async function ProcesssedDataWithasyncAwait() {
  try {
    const data = await callbackHell();
    const processData1 = await firstFunc(data);
    const processData2 = await secondFunc(processData1);
    console.log(`Final result of all functionswith async/awai:${processData2}`);
  } catch (error) {
    console.log(`Error:${error}`);
  }
}

ProcesssedDataWithasyncAwait(); 
//PRACTICE
console.log("Start");

async function processData() {
  try {
    const data = await getUserDataFromDB("name");
    const hobby = await getUserHobbies(data);
  } catch (error) {
    console.log(`Error:${error}`);
  }
}

processData(); */

console.log(fetch("text.txt")); //Handling use 1)Callback 2)new Promise    3)async/await
//text method returns promise
//if resolve will return text representation of body

//Fetch API  promise only rejects when we have network error(not other case)

/*
fetch("textt.txt")
  .then((res) => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.text();
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(`Error:${error}`)); */

/*
const result = document.querySelector(".results");
async function render() {
  try {
    const res = await fetch("text.txt-");

    if (!res.ok) {
      throw Error("not found at this time", res.statusText);
    }
    const data = await res.text();

    result.innerHTML = data;
  } catch (err) {
    console.log(err);
  }
}
render();  */
