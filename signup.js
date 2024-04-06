document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signup-form');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const errorMessage = document.getElementById('error-message');

    // Event listener for form submission
    signupForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Validate username, email, password, and confirm password
        if (!validateUsername(usernameInput.value) || !validateEmail(emailInput.value) || !validatePassword(passwordInput.value) || !validateConfirmPassword(passwordInput.value, confirmPasswordInput.value)) {
            showError('Please fill in all fields correctly.');
            return;
        }

        // Simulate sign-up process (replace with actual sign-up logic)
        // For demonstration purposes, we'll simply log the user details
        console.log('Username:', usernameInput.value);
        console.log('Email:', emailInput.value);
        console.log('Password:', passwordInput.value);

        // Redirect user to login page (replace with actual redirect logic)
        window.location.href = 'login.html';
    });

    // Function to validate username
    function validateUsername(username) {
        return username.trim() !== '';
    }

    // Function to validate email format
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Function to validate password
    function validatePassword(password) {
        return password.trim() !== '';
    }

    // Function to validate confirm password
    function validateConfirmPassword(password, confirmPassword) {
        return password === confirmPassword;
    }

    // Function to display error message
    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
    }
});
