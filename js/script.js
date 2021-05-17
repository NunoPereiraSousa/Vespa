let image = document.querySelector("#vespaImg");
let buyBtn = document.querySelector("#buyBtn");

let circle1 = document.querySelector(".circle1");
let circle2 = document.querySelector(".circle2");
let circle3 = document.querySelector(".circle3");
let circle4 = document.querySelector(".circle4");
let circle5 = document.querySelector(".circle5");

circle1.addEventListener("click", () => {
  image.src = "../assets/GREY.png";

  buyBtn.style.backgroundColor = "#B7BABC";
});

circle2.addEventListener("click", () => {
  image.src = "../assets/GREEN.png";

  buyBtn.style.backgroundColor = "#A9C0B4";
});

circle3.addEventListener("click", () => {
  image.src = "../assets/ORANGE.png";

  buyBtn.style.backgroundColor = "#DC5221";
});

circle4.addEventListener("click", () => {
  image.src = "../assets/BLUE.png";

  buyBtn.style.backgroundColor = "#2c3c54";
});
