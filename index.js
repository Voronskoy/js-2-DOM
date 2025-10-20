const fruits = document.querySelectorAll(".buttons > button");
let activeFruit = null;
const area = document.getElementById("area");
console.dir(area);
for (const fruit of fruits) {
  fruit.addEventListener("mousedown", () => {
    activeFruit = fruit;
    fruit.style.cursor = "move";
  });
  fruit.addEventListener("mousemove", (event) => {
    if (activeFruit) {
      console.log(event);
      activeFruit.style.left = event.clientX - area.offsetLeft + "px";
      activeFruit.style.top = event.clientY - area.offsetTop + "px";
    }
  });
  fruit.addEventListener("mouseup", () => {
    if (activeFruit) {
      activeFruit = null;
    }
  });
}
