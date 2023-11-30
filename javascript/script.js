//constructor
const pressMeButton = document.querySelector(".press-me");
const introContent = document.querySelector(".introduction-content");
const afterContent = document.querySelectorAll(".after");
const techniqueContent = document.querySelectorAll(".technique-after");
const mrBtn = document.querySelectorAll(".mr-tabs");
const mrContent = document.querySelectorAll(".mr-content");
const mrInnerContent = document.querySelectorAll(".mr-inner-content");
const defaultOpenElement = document.getElementById("defaultOpen");

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
  if (window.location.href.includes("MixedReality.html")) {
    mrInnerContent.forEach((el) => {
      el.style.opacity = el.style.opacity === "0" ? "1" : "0";
    });
  }
});

//Mixed Reality Page
if(window.location.href.includes("MixedReality.html")){
  function openMrtabs(event,content){
    for (i = 0; i < mrContent.length; i++) {
      mrContent[i].style.display = "none";
    }
    for (i = 0; i < mrBtn.length; i++) {
      mrBtn[i].className = mrBtn[i].className.replace(" active", "");
    }
    document.getElementById(content).style.display = "block";
    event.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  defaultOpenElement.click();
}