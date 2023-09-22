const section = document.querySelector("section.pan");

const move = (e) => {
  const currentX = e.pageX / window.innerWidth;
  const currentY = e.pageY / window.innerHeight;
  section.style.transform = `translate(${-1 * currentX}px, ${-1 * currentY}px`;
};

document.addEventListener("mousemove", move);
