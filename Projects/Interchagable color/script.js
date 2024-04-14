const btns = document.querySelectorAll(".btn");

const body = document.body;

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    number = btn.value;
    changeBack(number);
  });
});

function changeBack(color) {
  body.className = "";

  switch (color) {
    case "purple":
      body.classList.add("purple");
      break;
    case "red":
      body.classList.add("red");
      break;
    case "green":
      body.classList.add("green");
      break;
    case "blue":
      body.classList.add("blue");
      break;
    case "brown":
      body.classList.add("brown");
      break;
    case "orange":
      body.classList.add("orange");
      break;
    case "yellow":
      body.classList.add("yellow");
      break;

    default:
      break;
  }
}
