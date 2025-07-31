// Tampilkan popup nama saat load
welcomeMessage();

function welcomeMessage() {
    const name = prompt("Please enter your name:");
    if (name) {
        document.getElementById("welcome-speech").textContent = name;
    }
}

// Tangani submit form "Message Us"

function validateForm(event) {
    event.preventDefault(); // Cegah reload halaman

    const name = document.getElementById("name-input").value;
    const email = document.getElementById("email-input").value;
    const phone = document.getElementById("phone-input").value;
    const message = document.getElementById("message-input").value;

    const result = document.getElementById("result-form");
    result.innerHTML = `
        <p><strong>Current time:</strong> ${new Date().toLocaleString()}</p>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telepon:</strong> ${phone}</p>
        <p><strong>Pesan:</strong> ${message}</p>
    `;
}
