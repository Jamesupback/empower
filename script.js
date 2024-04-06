document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const submitButton = document.getElementById('submit-btn');
    const errorContainer = document.getElementById('error-message');

    // Event listener for form submission
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Validate email and password
        if (!validateEmail(emailInput.value) || !passwordInput.value) {
            showError('Please enter a valid email and password.');
            return;
        }

        // Simulate login process (replace with actual authentication logic)
        const email = emailInput.value;
        const password = passwordInput.value;

        // Example: Simulate asynchronous login request
        setTimeout(() => {
            // Check credentials (replace with actual authentication logic)
            if (email === 'user@example.com' && password === 'password') {
                // Redirect user to dashboard (replace with actual redirect logic)
                window.location.href = 'dashboard.html';
            } else {
                showError('Invalid email or password.');
            }
        }, 1000);
    });

    // Function to validate email format
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Function to display error message
    function showError(message) {
        errorContainer.textContent = message;
        errorContainer.style.display = 'block';
    }
});document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Redirect to the desired page
    window.location.href = "homepage.html";
});
