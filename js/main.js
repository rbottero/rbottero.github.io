/* Dark mode */
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});
window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("i").classList.add("fa-sun");
  } else {
    dayNight.querySelector("i").classList.add("fa-moon");
  }
});

/* Escribiendo */
var typed = new Typed(".typing", {
  strings: ["", "Desarrollador Web", "Diseñador Web", "Diseñador Gráfico"],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});
