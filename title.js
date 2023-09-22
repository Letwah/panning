console.log("title.js is being executed");

const title = document.querySelector("h1");
const links = document.querySelectorAll("section a");
const body = document.querySelector("body");

//add loop so links work by them selves

links.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    console.log(link.getAttribute("data-title"));
    title.innerText = link.getAttribute("data-title");

    body.classList.add("hovered");
    link.classList.add("hovered");

    body.classList.add(link.getAttribute("data-color"));
  });

  link.addEventListener("mouseleave", () => {
    console.log(link.getAttribute("data-title"));
    title.innerText = "PORTFOLIO";

    body.classList.remove("hovered");
    link.classList.remove("hovered");

    body.classList.remove(link.getAttribute("data-color"));
  });
});
