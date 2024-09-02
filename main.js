const swirlTumbling = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const swirlTiming = {
  duration: 2000,
  iterations: 1,
  fill: "forwards",
};

const swirl1 = document.querySelector("#swirl1");
const swirl2 = document.querySelector("#swirl2");
const swirl3 = document.querySelector("#swirl3");

swirl1.animate(swirlTumbling, swirlTiming);

const animateWithPromises = (element) => {
  return element.animate(swirlTumbling, swirlTiming).finished;
};

const animateSwirl2AfterSwirl1 = async () => {
  await animateWithPromises(swirl1);
  await animateWithPromises(swirl2);
  await animateWithPromises(swirl3);
};

animateSwirl2AfterSwirl1();
