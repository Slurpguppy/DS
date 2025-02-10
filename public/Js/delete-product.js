// Function to fetch and display products with a counter
async function fetchProduct() {
    try {
        const response = await fetch("http://localhost:3000/getProduct");
        const products = await response.json();

        const productsList = document.getElementById("productsList");
        const productCounter = document.getElementById("productCounter");
        const productDropdown = document.getElementById("productDropdown");

        // Clear the list and dropdown
        productsList.innerHTML = "";
        productDropdown.innerHTML = '<option value="">Select a product to delete</option>'; // Reset dropdown

        // Loop through the products and populate the list and dropdown
        products.forEach(product => {
            // Add product to the list
            const li = document.createElement("li");
            li.textContent = `${product.productName} - ${product.productDescription} - ${product.productPrice} - ${product.productCategory} - ${product.productAddedAt}`;
            productsList.appendChild(li);

            // Add product to dropdown
            const option = document.createElement("option");
            option.value = product._id; // Use product ID as value
            option.textContent = product.productName;
            productDropdown.appendChild(option);
        });

        // Update the product counter
        productCounter.textContent = `Total Products: ${products.length}`;
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

// Function to delete the selected product
async function deleteProduct() {
    const selectedProductId = document.getElementById("productDropdown").value;

    // If no product is selected, show alert
    if (!selectedProductId) {
        alert("Please select a product to delete.");
        return;
    }

    try {
        const response = await fetch(`http://localhost:3000/deleteProduct/${selectedProductId}`, {
            method: "DELETE",
        });

        if (response.ok) {
            alert("Product deleted successfully!");

            // Refresh the product list after deletion
            fetchProduct(); // This will update both the dropdown and product list
        } else {
            alert("Failed to delete product.");
        }
    } catch (error) {
        console.error("Error deleting product:", error);
    }
}

// Fetch products when the page loads
window.onload = fetchProduct;

// Add event listener to the delete button
document.getElementById("deleteProductBtn").addEventListener("click", deleteProduct);

// Refresh product list every 5 seconds
setInterval(fetchProduct, 5000);
