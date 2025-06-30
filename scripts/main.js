const listItems = document.querySelectorAll("li");
const myImage = document.querySelector("img");

function toggleDone(e) {
  if (!e.target.className) {
    e.target.className = "done";
  } else {
    e.target.className = "";
  }
}

listItems.forEach((item) => {
  item.addEventListener("click", toggleDone);
});

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/WoW_icon.svg.png") {
    myImage.setAttribute("src", "images/t_wow_logo.webp");
  } else {
    myImage.setAttribute("src", "images/WoW_icon.svg.png");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
  localStorage.setItem("name", myName);
  myHeading.textContent = `Welcome to the TWoW Database, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Welcome to the TWoW Database, ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
})

console.log("stored name:", localStorage.getItem("name"));
