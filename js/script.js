const links = document.querySelectorAll("#link");
console.log(links);

links.forEach((link) => link.addEventListener("click", active));
function active(e) {
  links.forEach((link) => {
    link.classList.remove("activeLink");
  });
  // console.log(e);
  e.target.classList.add("activeLink");
}
