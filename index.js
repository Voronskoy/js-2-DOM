const fruits = document.querySelectorAll(".buttons > button");
let activeFruit = null;
const area = document.getElementById("area");
let x = 0;
let y = 0;
console.dir(area);
for (const fruit of fruits) {
  fruit.addEventListener("mousedown", (event) => {
    activeFruit = fruit;
    x = event.offsetX;
    y = event.offsetY;
    fruit.style.cursor = "move";
  });
  fruit.addEventListener("mousemove", (event) => {
    if (activeFruit) {
      console.log(event);
      activeFruit.style.left = event.clientX - area.offsetLeft - x + "px";
      activeFruit.style.top = event.clientY - area.offsetTop - y + "px";
    }
  });
  fruit.addEventListener("mouseup", () => {
    if (activeFruit) {
      activeFruit = null;
    }
  });
}
