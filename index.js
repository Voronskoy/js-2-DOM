const box = document.querySelector(".box");
const fruits = document.querySelectorAll(".fruits>li");
console.dir(fruits);
fruits.forEach((fruit) => {
  fruit.addEventListener("click", () => {
    const words = fruit.textContent.split(" - ");
    console.dir(words);
    box.textContent = words[0];
    fruits.forEach((fruit) => {
      fruit.style.backgroundColor = "";
    });
    box.style.backgroundColor = words[1];
    fruit.style.backgroundColor = words[1];
  });
});
const lis = document.getElementsByTagName("li");
console.dir(lis);
for (const li of lis) {
  li.addEventListener("click", () => {
    for (const li of lis) {
        li.style.textAlign = '';
    }
    li.style.textAlign = "center";
  });
}
