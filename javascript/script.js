//constructor
const pressMeButton = document.querySelector(".press-me");
const introContent = document.querySelector(".introduction-content");

//eventListener
pressMeButton.addEventListener("click", () => {
  introContent.style.opacity = introContent.style.opacity === "0" ? "1" : "0";
});
