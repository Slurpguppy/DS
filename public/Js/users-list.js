// Fetch users from the backend API
fetch('http://localhost:3000/api/users')
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();  // Parse the JSON response
})
.then(users => {
  console.log(users);  // Log the users to the console to check the data
  const userList = document.getElementById('user-list');
  userList.innerHTML = '';  // Clear the list before inserting new users

  // Loop through each user and create a list item for them
  users.forEach(user => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <strong>${user.name}</strong> <br>
      <em>${user.email}</em> <br>
      <em>Created at: ${new Date(user.createdAt).toLocaleDateString()}</em> <br>
      <img src="${user.picture}" alt="${user.name}" width="50" />
      <br><br>
    `;
    userList.appendChild(listItem);  // Add the list item to the <ul>
  });
})
.catch(error => {
  console.error('Error fetching users:', error);
});