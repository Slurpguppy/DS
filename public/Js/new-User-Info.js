 // Handle form submission for user data
 document.getElementById("userForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;
    const address = document.getElementById("address").value;

    const noteToDriver = document.getElementById("noteToDriver").value;
    const notificationPreferences = document.getElementById("notificationPreferences").value;
    const substitutionPreferences = document.getElementById("substitutionPreferences").value;
    const deliveryOrPickup = document.getElementById("deliveryOrPickup").value;
    const newLetterSubscribe = document.getElementById("newLetterSubscribe").value;

    const response = await fetch("http://localhost:3000/addUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, lastName, email, number, address, noteToDriver, notificationPreferences, substitutionPreferences, deliveryOrPickup, newLetterSubscribe }),
    });

    const result = await response.json();
    alert(result.message);
});