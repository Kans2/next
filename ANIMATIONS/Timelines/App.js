/*let tl = gsap.timeline();

tl.to(".box1", {
  duration: 2,
  scale: 0,
  opacity: 0,
  delay: 1,
})
  .to(".box2", {
    duration: 2,
    x: -200,
  })
  .to(".box3", {
    duration: 2,
    x: -200,
    borderRadius: 0,
    rotate: 360,
  })
  .set(".box1", {
    duartion: 2,
    scale: 1,
    opacity: 1,
  });

//Refactored
let tl = gsap.timeline({
  defaults: {
    duration: 1,
  },
});

tl.to(".box1", {
  scale: 0,
  opacity: 0,
  delay: 1,
})
  .to(".box2", {
    x: -200,
  })
  .to(".box3", {
    x: -200,
    borderRadius: 0,
    rotate: 360,
  })
  .set(".box1", {
    x: 200,
  })
  .to(".box1", {
    scale: 1,
    opacity: 1,
  });   */

let tl = gsap
  .timeline({
    default: {
      duration: 1,
    },
  })
  .to("h1", {
    y: -100,
    color: "white",
  })
  .to(".box1", {
    x: -100,
    backgroundColor: "blue",
  })
  .to(".box2", {
    y: 100,
    backgroundColor: "purple",
  })
  .to(".box3", {
    x: 100,
    backgroundClor: "crimson",
  });
