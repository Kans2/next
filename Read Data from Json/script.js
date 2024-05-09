/*const result = document.querySelector(".result");

async function render() {
  try {
    const res = await fetch("data.json");
    if (!res.ok) {
      throw Error(res.statusText);
    }
    const data = await res.json();
    result.innerHTML = data.age;
  } catch (err) {
    console.log("Error:${err}");
  }
}

render(); */

//third party API
const btn = document.querySelector(".btn");

btn.addEventListener("click", makeRequest); //function

function makeRequest() {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => {
      if (!res.ok) {
        throw Error(res.statusText);
      }
      return res.json();
    })
    .then((data) => {
      //document.querySelector(".id").innerHTML = data.id; //showing in browser
      let output = document.querySelector(".all-post");
      data.forEach((element) => {
        output.innerHTML += `
        <div>(Id):${element.id}</div>
        <div>(title):${element.title}</div>
        <div>(Body):${element.body}</div> </br>
        <div></div>`;
      });
    })
    .catch((err) => {
      console.log(err);
    });
}
