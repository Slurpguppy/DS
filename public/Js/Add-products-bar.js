document.getElementById("productForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const productName = document.getElementById("newProduct").value;
    const productPrice = document.getElementById("newPrice").value;

    if (!productName || !productPrice) return alert("Please enter both product name and price!");

    // Save product to localStorage
    let products = JSON.parse(localStorage.getItem("products")) || [];
    products.push({ name: productName, price: productPrice });
    localStorage.setItem("products", JSON.stringify(products));

    alert("Product added successfully!");
    document.getElementById("newProduct").value = "";
    document.getElementById("newPrice").value = "";
});