// Fetch drivers from the backend API
fetch('http://localhost:5000/getDrivers')  // Updated the endpoint to reflect the new one
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();  // Parse the JSON response
  })
  .then(drivers => {
    console.log(drivers);  // Log the drivers to the console to check the data
    const driverList = document.getElementById('user-list');  // Changed to 'driver-list' if necessary
    driverList.innerHTML = '';  // Clear the list before inserting new drivers

    // Loop through each driver and create a list item for them
    drivers.forEach(driver => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <strong>${driver.name} ${driver.lastName}</strong> <br>
        <em>${driver.email}</em> <br>
        <em>Created at: ${new Date(driver.createdAt).toLocaleDateString()}</em> <br>
        <img src="${driver.picture}" alt="${driver.name}" width="50" />  <!-- Assuming picture field is added -->
        <br><br>
      `;
      driverList.appendChild(listItem);  // Add the list item to the <ul>
    });
  })
  .catch(error => {
    console.error('Error fetching drivers:', error);
  });
