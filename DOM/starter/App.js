//console.log(document);

//console.log(document.head); //access head
//console.log(document.title);
//console.log(document.body);
//console.log(document.documentURI);

//this an the

//innertext , textContent , innerhtml
/*
const p = document.querySelector("p");

console.log(p.innerText); //formatted text

console.log(p.textContent);
console.log(p.innerHTML);

const h1 = document.querySelector("h1");
h1.innerText = "changed";
//h1.innerHTMl =<em>hello</em>; 

//NOW CLASSES

const h1 = document.querySelector("h1");

h1.classList.add("one"); //adding classname

h1.classList.toggle("one");  //Toggle is add or remove the classes
console.log(h1); 

//LIVE CODING

//--href--value--type--getAttribute--setAttribute(attrName,value)

const a = document.querySelector("a");
console.log(a.href);
console.log((a.href = "www.youtube.com"));  //to change the href 

const input = document.querySelector("input");

console.log(input.value); //get the value from input
console.log((input.type = "email"));   //change and type  

//getAttribute(attrName)
const input = document.querySelector("input");
console.log(input.getAttribute("type")); 

//classlist --- add --- remove ---- toggle

const h1 = document.querySelector("h1");

console.log(h1.classList); //check the classes specific elements

const p = document.querySelector("p");

p.classList.add("styles"); //adding the classlist
p.classList.remove("styles"); //removing the class

console.log(p);

p.classList.toggle("app"); 

//get attribute

const input = document.querySelector("input");

console.log(input.getAttribute("type"));
console.log(input.getAttribute("placeholder"));

//SetAttribute(name,value)

console.log(input.setAttribute("placeholder", "Password"));
console.log(input.setAttribute("type", "password"));   

const a = document.querySelector("a");

console.log(a.getAttribute("href"));

const a1 = document.querySelector(".a-two");

console.log(a1.setAttribute("href", "https://www.youtube.com"));

console.log(a1.href);   

//Sibilings

let firstLi = document.querySelector("li");

console.log(firstLi);
console.log(firstLi.parentElement);
console.log(firstLi.parentElement.parentElement);
console.log(firstLi.parentElement.parentElement.parentElement); 

//Childrens
let ul = document.querySelector("ul");
console.log(ul.children);
console.log(ul.children[0]);
console.log(ul.children[1]);
console.log(ul.children[2]);
console.log(ul.children[3]);



console.log((ul.children[0].innerText));  //get the li text
console.log((ul.children[0].innerText = "one"));   //change the innertext   

//Sibilings

let firstLi = document.querySelector("li");

console.log(firstLi.nextElementSibling.textContent);
console.log(firstLi.nextElementSibling.nextElementSibling.textContent); 

//PREVIOUS ELEMENT
let fourthLi = document.querySelector(".fourth");
console.log(fourthLi); 
console.log(fourthLi.previousElementSibling);  

//MODIFYING STYLING

const h1 = document.querySelector("h1");

console.log((h1.style.color = "green"));
h1.style.backgroundColor = "yellow"; 

//CREATING ELEMENTS AND APPENDING INTO THE DOM

const h1 = document.createElement("h1"); //to create whatever elements
h1.textContent = "hello buddy";
console.log(h1.textContent);
h1.classList.add("tset");
console.log(h1); 

//APPENDING
const h1 = document.createElement("h1"); //to create whatever elements

const body = document.body;
h1.textContent = "working";

body.appendChild(h1);    //add the creating elements in body 
console.log(h1.textContent);  

const ul = document.querySelector("ul");
const newli = document.createElement("li");
newli.innerText = "i am a new tag";

ul.appendChild(newli);

const firstli = document.querySelector("li");

//SELECTOR INSERT BEFORE(what,were)
ul.insertBefore(newli, firstli);  

const firstP = document.querySelector("p");
const i = document.createElement("i");
i.innerText = "Im italics";
firstP.insertAdjacentHTML("beforebegin", i);
firstP.insertAdjacentHTML("afterbegin", i);
firstP.insertAdjacentHTML("afterend", i);
firstP.insertAdjacentHTML("beforeend", i);

console.log(firstP);  

//APPEND      ----used to multiple elements in the single ----
const i = document.createElement("i");
i.innerText = "Im italics";
const h1 = document.createElement("h1");
h1.innerText = "i am h1";
let section = document.querySelector("section");
section.append(i, h1);
section.prepend(i, h1);
console.log(section);  

//REMOVE

const newList = document.querySelector(".new-list");
const four = document.querySelector(".fourth");

newList.removeChild(four);

newList.remove(); //used to delete everything any kind of tag. 

//EVENTS

let best = document.querySelector(".work");

best.addEventListener("click", function () {
  console.log("hello");
}); 
function greet() {
  console.log("hello world");
}
best.addEventListener("click", greet); 

best.addEventListener("click", () => {
  console.log("yellow buddy");
}); 

//EVENT OBJECT
let para = document.querySelector(".para");

para.addEventListener("click", (even) => {
  console.log(even);
});   */
/*
const form = document.querySelector("form");
const input = document.querySelector("input");
form.addEventListener("submit", (e) => {
  e.preventDefault(); //used to the browser loaded when the browser is loading to
  console.log(input.value);
});  */
/*
//Mouse events
// 1. click
// 2.contextmenu
// 3.dbclick
// 4.mousedown
//5. mouseenter
//6.mouuseleave
//7.mousemove
//8.mouseout
//9.mouseover
//10.mouseup

let one = document.querySelector(".click");
let two = document.querySelector(".context-menu");
let three = document.querySelector(".dbclick");
let four = document.querySelector(".mousedown");
let five = document.querySelector(".mouseenter");
let six = document.querySelector(".mouseleave");
let seven = document.querySelector(".mouseout");
let eight = document.querySelector(".mouseover");
let nine = document.querySelector(".mousemove");
let ten = document.querySelector(".mouseup");

two.addEventListener("contextmenu", () => {
  //used when right click the element
  two.classList.toggle("red");
});

three.addEventListener("dblclick", () => {
  // when double click specific element or tag
  three.classList.toggle("green");
});

four.addEventListener("mousedown", () => {
  // when double click specific element or tag
  four.classList.toggle("blue");
});

five.addEventListener("mouseenter", () => {
  five.classList.toggle("yellow");
});

six.addEventListener("mouseleave", () => {
  six.classList.toggle("orange");
});

seven.addEventListener("mousemove", () => {
  //seven.classList.toggle("violet");
  seven.textContent = "hello";
});

eight.addEventListener("mousemove", () => {
  //seven.classList.toggle("violet");
  eight.textContent = "hello";
});

nine.addEventListener("mousemove", () => {
  //seven.classList.toggle("violet");
  nine.textContent = "hello world";
});

ten.addEventListener("mouseup", () => {
  ten.classList.toggle("violet");
});   */

//KEYBOARD EVENTS

const input = document.querySelector("input");
input.style.padding = "20px";

//input.addEventListener("keypress", () => {
// console.log("key has pressed");
//});

//input.addEventListener("keyup", () => {
//  console.log("keys up");
//});

//USEFULL PROPERTIES AND METHODS
input.addEventListener("keypress", (e) => {
  //to get char code
  //console.log(e.charCode);
  //console.log(e.code);
  console.log(e.ctrlKey);
});
