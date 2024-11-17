let button = document.getElementById("button");
let productContainer = document.getElementById("product-container");
let productId = 1
 async function SaleControl()  {
 try {
    let Sale = await fetch("https://fakestoreapi.com/products/${productId}")
    let data = await Sale.json();
    data.map(()=>{
        let productInfo = document.createElement("p");
        productInfo.textContent = data.price;
        button.appendChild(productInfo);
        productId++;
    })
   
 } catch (error) {
    let errorMessage = document.createElement("p");
        errorMessage.textContent = `Error: ${error.message}`;
        productContainer.appendChild(errorMessage);
 }}
    


SaleControl()

button.addEventListener("click", () => {
    fetchProduct(productId);
    productId++; 
});
