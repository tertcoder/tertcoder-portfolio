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

  links[0].classList.add("activeLink");
}

// Greeting Word
let date = new Date();
let hours = date.getHours();

if (hours < 12 && hours >= 0) {
  greet.textContent = `Good Morning!`;
} else if (hours >= 12 && hours < 18) {
  greet.textContent = `Good Afternoon!`;
} else {
  greet.textContent = `Good Evening!`;
}
// times.textContent = `${hours} : ${minutes} : ${seconds}`;
