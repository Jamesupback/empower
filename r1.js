document.addEventListener("DOMContentLoaded", function() {
    const registerButton = document.getElementById("registerButton");
    const registrationForm = document.getElementById("registrationForm");
    const registrationMessage = document.getElementById("registrationMessage");

    registerButton.addEventListener("click", function(event) {
        event.preventDefault();
        // Simulate registration process (display success message)
        registrationMessage.textContent = "Successfully registered!";
        registrationForm.reset();
    });
});

