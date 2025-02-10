// Function to fetch and display drivers
async function fetchDrivers() {
    try {
        const response = await fetch("http://localhost:3000/getDrivers"); // Ensure your backend route is correct
        const drivers = await response.json();

        const driverList = document.getElementById("driverList");
        const numberOfDrivers = document.getElementById("numberOfDrivers");

        driverList.innerHTML = ""; // Clear the list before adding new items

        drivers.forEach(driver => {
            const li = document.createElement("li");
            li.textContent = `${driver.driverName} ${driver.driverLastName} - ${driver.driverEmail} - ${driver.driverNumber}`;
            driverList.appendChild(li);
        });

        //NUMBER OF DRIVERS
        // Update the number of drivers
        numberOfDrivers.textContent = drivers.length;
    } catch (error) {
        console.error("Error fetching drivers:", error);
    }
}

// Call fetchDrivers when the page loads
window.onload = fetchDrivers;



// Refresh driver list every 5 seconds
setInterval(fetchDrivers, 5000);