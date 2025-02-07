 // Handle form submission for user data
 document.getElementById("userForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const driverName = document.getElementById("driverName").value;
    const driverlastName = document.getElementById("driverlastName").value;
    const driverEmail = document.getElementById("driverEmail").value;
    const driverNumber = document.getElementById("driverNumber").value;
    const driverAddress = document.getElementById("driverAddress").value;
    const response = await fetch("http://localhost:3000/addUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ driverName, driverlastName, driverEmail, driverNumber, driverAddress }),
    });

    const result = await response.json();
    alert(result.message);
});