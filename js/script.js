const links = document.querySelectorAll("#link");
console.log(links);
const greet = document.querySelector(".greeting");
const orientLink = document.querySelector("#orient1");

// Active Style for links
links.forEach((link) => link.addEventListener("click", active));
function active(e) {
  links.forEach((link) => {
    link.classList.remove("activeLink");
  });
  // console.log(e);
  e.target.classList.add("activeLink");
}
// From Orient Links

orientLink.addEventListener("click", linkOrient);
function linkOrient(e) {
  links.forEach((link) => {
    link.classList.remove("activeLink");
  });

  links[1].classList.add("activeLink");
}

// Greeting Word
let date = new Date();
// console.log(date);
let hours = date.getHours();
// let user = prompt("What is your surname");
if (hours < 12 && hours >= 0) {
  greet.textContent = `Good Morning!`;
} else if (hours >= 12 && hours < 17) {
  greet.textContent = `Good Afternoon!`;
} else {
  greet.textContent = `Good Evening!`;
}
// times.textContent = `${hours} : ${minutes} : ${seconds}`;
