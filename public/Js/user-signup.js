 // Handle form submission for user data
 document.getElementById("userForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;
    const address = document.getElementById("address").value;
    const response = await fetch("http://localhost:3000/addUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, lastName, email, number, address }),
    });

    const result = await response.json();
    alert(result.message);
});