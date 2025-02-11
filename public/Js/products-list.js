// Function to fetch and display products with a counter
async function fetchProduct() {
    try {
        const response = await fetch("http://localhost:3000/getProduct");
        const products = await response.json();

        const productsList = document.getElementById("productsList");
        const productCounter = document.getElementById("productCounter");

        productsList.innerHTML = ""; // Clear existing list

        products.forEach(product => {
            const li = document.createElement("li");
            li.textContent = `${product.productName} - ${product.productDescription} - ${product.productPrice} - ${product.productCategory} - ${product.productAddedAt} - ${product.productQuantity} - ${product.productSupplier} - ${product.productLocal}`;
            productsList.appendChild(li);
        });

        // Update the product counter
        productCounter.textContent = `Total Products: ${products.length}`;
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

// Call fetchProduct when the page loads
window.onload = fetchProduct;
setInterval(fetchProduct, 5000);
