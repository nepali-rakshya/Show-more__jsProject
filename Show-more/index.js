const content = document.querySelector(".container");

const clickButton = document.querySelector("button");

clickButton.addEventListener("click", showMagic);

function showMagic() {
  if (content.classList.contains("distance")) {
    content.classList.remove("distance");
    clickButton.innerText = "Show More";
  } else {
    content.className += " distance";
    clickButton.innerText = "Show Less";
  }
}

// function showMagic() {
//   if (content.getAttribute("id") == "distance") {
//     content.removeAttribute("id");
//     clickButton.innerText = "Show More";
//   } else {
//     content.setAttribute("id", "distance");
//     clickButton.innerText = "Show Less";
//   }
// }
