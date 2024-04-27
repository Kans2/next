const input = document.querySelector("input");
const Additem = document.querySelector("button");
let task = document.querySelector(".todos");

function getTodo() {}

Additem.addEventListener("click", (e) => {
  e.preventDefault();

  task.innerHTML = `
  ${input.value}
    `;
});
