const section = document.querySelector("section.pan");

//stop jerkyness with tweening
let posX = 0.5;
let posY = 0.5;

let currentX = 0.5;
let currentY = 0.5;

const move = (e) => {
  posX = e.pageX / window.innerWidth;
  posY = e.pageY / window.innerHeight;
};

const tween = (e) => {
  //old version = never version plus a fraction of the position  of where new pos is..
  currentX = currentX + (posX - currentX) * 0.05;
  currentY = currentY + (posY - currentY) * 0.05;

  //how big is section

  const sectionX = section.clientWidth - window.innerWidth;
  const sectionY = section.clientHeight - window.innerHeight;

  section.style.transform = `translate(${-1 * sectionX * currentX}px, ${
    -1 * sectionY * currentY
  }px`;

  requestAnimationFrame(tween);
};

//call tween

tween();

document.addEventListener("mousemove", move);
