//constructor
const pressMeButton = document.querySelector(".press-me");
const introContent = document.querySelector(".introduction-content");
const afterContent = document.querySelectorAll(".after");

//eventListener
pressMeButton.addEventListener("click", () => {
  if (window.location.href.includes("index.html")) {
    introContent.style.opacity = introContent.style.opacity === "0" ? "1" : "0";
  }

  afterContent.forEach((el) => {
    el.style.opacity = el.style.opacity === "0" ? "1" : "0";
  });
});
