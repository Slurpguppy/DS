 // Handle form submission for user data
 document.getElementById("productForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const productName = document.getElementById("productName").value;
    const productDescription = document.getElementById("productDescription").value;
    const productPrice = document.getElementById("productPrice").value;
    const productCategory = document.getElementById("productCategory").value;
    const productAddedAt = document.getElementById("productAddedAt").value;
    const response = await fetch("http://localhost:3000/addProduct", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productName, productDescription, productPrice, productCategory, productAddedAt }),
    });

    const result = await response.json();
    alert(result.message);
});