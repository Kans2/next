let Ratings = document.querySelectorAll(".rating");
let ratingContainer = document.querySelector(".rating-container");
let Sendbtn = document.querySelector("#send");
let panel = document.querySelector("#panel");

let selectedRating = "satisfied";

ratingContainer.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("rating")) {
    //console.log(e.target.parentNode.classList.contains("rating"));
    removeActive();

    e.target.parentNode.classList.add("active");
    selectedRating = e.target.nextElementSibling.innerHTML;
  }
});

Sendbtn.addEventListener("click", () => {
  panel.innerHTML = `
    <p class="heart">💗</p>
    <strong>Thank you!</strong>
    <br>
    <strong>Feeback:${selectedRating}</strong>`;
});

function removeActive() {
  for (let i = 0; i < Ratings.length; i++) {
    Ratings[i].classList.remove("active");
  }
}
