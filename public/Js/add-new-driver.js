document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("driverForm").addEventListener("submit", async function(event) {
        event.preventDefault();

        const driverName = document.getElementById("driverName").value;
        const driverLastName = document.getElementById("driverLastName").value;
        const driverEmail = document.getElementById("driverEmail").value;
        const driverNumber = document.getElementById("driverNumber").value;

        try {
            const response = await fetch("http://localhost:3000/addDriver", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ driverName, driverLastName, driverEmail, driverNumber }),
            });

            if (!response.ok) {
                throw new Error("Failed to submit data.");
            }

            const result = await response.json();
            alert(result.message);
        } catch (error) {
            alert("Error: " + error.message);
        }
    });
});
