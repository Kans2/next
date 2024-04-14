const emoji = document.querySelector("#emoji");

let emojis = [
  "😁",
  "😀",
  "😜",
  "🤣",
  "😂",
  "😗",
  "😇",
  "😋",
  "😉",
  "🤑",
  "🤗",
  "🤫",
  "🤐",
];

emoji.addEventListener("mouseover", () => {
  emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
});
