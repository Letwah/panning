const title = document.querySelector("h1");

const links = document.querySelectorAll("section.pan a");

//add loop so links work by them selves

links.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    title.innerText = "hovering now";
  });
});
