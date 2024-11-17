let button = document.getElementById("button");
let productContainer = document.getElementById("product-container");
let productId = 1;

async function SaleControl() {
  try {
    let Sale = await fetch(`https://fakestoreapi.com/products/${productId}`);
    let data = await Sale.json();
    let productInfo = document.createElement("p");
    productInfo.textContent = `Product Name: ${data.title}, Price: $${data.price}`;
    document.body.appendChild(productInfo);
    productId++;
  } catch (error) {
    let errorMessage = document.createElement("p");
    errorMessage.textContent = `პროდუქტის ლიმიტი ამოიწურა`;
    productContainer.appendChild(errorMessage);
  }
}

button.addEventListener("click", () => {
  SaleControl();
  productId++;
});
