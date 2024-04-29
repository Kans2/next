let input = document.querySelector("input");
let Additem = document.querySelector("button");
let task = document.querySelector(".todos");
let form = document.querySelector("form");

function getTodo(value) {
  //Creating New Elements
  let todo = document.createElement("div");
  let textEI = document.createElement("span");

  //Setting values and styles

  textEI.innerHTML = value;

  //Append our Element to the DOM

  todo.appendChild(textEI);

  let closeEI = document.createElement("span");
  closeEI.innerHTML = "&times;";
  closeEI.classList.add("delete");

  //Attach Events
  closeEI.addEventListener("click", function (e) {
    task.removeChild(todo);
  });

  todo.appendChild(closeEI);
  todo.classList.add("todo");
  return todo;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let value = input.value;
  if (!value.trim()) return;
  task.appendChild(getTodo(value));
  input.value = "";
});
