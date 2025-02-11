// Function to fetch and display users with a counter
async function fetchUsers() {
  try {
      const response = await fetch("http://localhost:3000/getUsers");
      const users = await response.json();

      const usersList = document.getElementById("user-list");
      const userCounter = document.getElementById("userCounter");

      usersList.innerHTML = ""; // Clear existing list

      users.forEach(user => {
          const li = document.createElement("li");
          li.innerHTML = `
          <strong>${user.name} ${user.lastName}</strong><br>
          <b>Email:</b> ${user.email}<br>
          <b>Address:</b> ${user.address}<br>
          <b>Phone:</b> ${user.number}<br>
          <b>Note to Driver:</b> ${user.noteToDriver}<br>
          <b>Notification Preferences:</b> ${user.notificationPreferences}<br>
          <b>Substitution Preferences:</b> ${user.substitutionPreferences}<br>
          <b>Delivery/Pickup:</b> ${user.deliveryOrPickup}<br>
          <b>Newsletter Subscription:</b> ${user.newLetterSubscribe}<br>
          <hr><br>
      `;
          usersList.appendChild(li);
      });

      // Update the user counter
      userCounter.textContent = `Total Users: ${users.length}`;
  } catch (error) {
      console.error("Error fetching users:", error);
  }
}

// Call fetchUsers when the page loads
window.onload = fetchUsers;
setInterval(fetchUsers, 5000);






//default
          //li.textContent = `${user.name} ${user.lastName} - ${user.email} - ${user.address} - ${user.number} - ${user.noteToDriver} - ${user.notificationPreferences} - ${user.substitutionPreferences} - ${user.deliveryOrPickup} - ${user.newLetterSubscribe}`;
