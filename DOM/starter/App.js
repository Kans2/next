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
console.log((input.type = "email"));   //change and type  */

//getAttribute(attrName)
const input = document.querySelector("input");
console.log(input.getAttribute("type"));
