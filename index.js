const products = document.querySelectorAll("#shop .product");
const check = document.querySelector("#shop h1 span");

//
products.forEach((product) => {
  if (product.dataset.category === "fruits&veget") {
    product.style.backgroundColor = "Lightgreen";
  }
});

let summa = 0;
check.textContent = summa;

const addToCart = (event) => {
  summa += Number(event.currentTarget.dataset.price);
  if (summa > 150) {
    alert("Ви перевисили ліміт карти");
    event.currentTarget.removeEventListener("click", addToCart);
    return;
  }
  event.currentTarget.style.backgroundColor = "pink";
  check.textContent = summa;
};

products.forEach((product) => {
  product.addEventListener("click", addToCart);
});
