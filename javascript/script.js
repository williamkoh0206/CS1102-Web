//constructor
const pressMeButton = document.querySelector(".press-me");
const introContent = document.querySelector(".introduction-content");
const afterContent = document.querySelectorAll(".after");
const techniqueContent = document.querySelectorAll(".technique-after");

//eventListener
pressMeButton.addEventListener("click", () => {
  if (window.location.href.includes("index.html")) {
    introContent.style.opacity = introContent.style.opacity === "0" ? "1" : "0";
  }

  if (window.location.href.includes("Findings.html")) {
    afterContent.forEach((el) => {
      el.style.opacity = el.style.opacity === "0" ? "1" : "0";
    });
  }
  if (window.location.href.includes("technique.html")) {
    techniqueContent.forEach((el) => {
      el.style.opacity = el.style.opacity === "0" ? "1" : "0";
    });
  }
});
