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
h1.style.backgroundColor = "yellow"; */
