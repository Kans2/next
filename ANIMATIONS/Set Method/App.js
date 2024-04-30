//set the properties of an element

gsap.set(".box", {
  //Adding needed properties
  opacity: 0,
  background: "yellow",
});

gsap.to(".box", {
  //yoyo using the bottom to top,
  opacity: 1,
  duration: 3,
  background: "white",
  y: 100,
  repeat: -1,
  yoyo: true,
});
