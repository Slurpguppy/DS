 // Function to fetch and display users
 async function fetchProduct() {
    const response = await fetch("http://localhost:3000/getProduct");
    const Product = await response.json();

    const productsList = document.getElementById("productsList");
    productsList.innerHTML = ""; // Clear existing list
    Product.forEach(Product => {
        const li = document.createElement("li");
        li.textContent = `${Product.productName} - ${Product.productDescription} - ${Product.productPrice} - ${Product.productCategory} - ${Product.productAddedAt}`;

        productsList.appendChild(li);
    });
}


// Call fetchUsers when the page loads
window.onload = fetchProduct;
setInterval(fetchProduct, 5000);