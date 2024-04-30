//from method dont have to specify the initial state .(it will automaticaly)
//from to from method specify the default value, and    also new animation state

/*gsap.from(".box1", {
  y: -200,
  duration: 3,
  ease: "linear",
  repeat: -1,
  yoyo: true,
});   */

//from to method

gsap.fromTo(
  ".box2",
  {
    y: 200,
    opacity: 0,
  },
  {
    opacity: 1,
    y: -200,
    duration: 3,
    esae: "linear",
    repeat: -1,
    yoyo: true,
  }
);
