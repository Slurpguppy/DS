  // Function to fetch and display users
  async function fetchUsers() {
    const response = await fetch("http://localhost:3000/getUsers");
    const users = await response.json();

    const userList = document.getElementById("userList");
    userList.innerHTML = ""; // Clear existing list
    users.forEach(user => {
        const li = document.createElement("li");
        li.textContent = `${user.name} - ${user.lastName} - ${user.email} - ${user.number} - ${user.address}`;

        userList.appendChild(li);
    });
}

// Call fetchUsers when the page loads
window.onload = fetchUsers;
setInterval(fetchUsers, 5000);