document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signupForm');
    const errorElement = document.getElementById('error');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;

        if (username === '') {
            showError('Username is required');
            return;
        }

        if (email === '') {
            showError('Email is required');
            return;
        }

        if (!isValidEmail(email)) {
            showError('Please enter a valid email address');
            return;
        }

        if (password === '') {
            showError('Password is required');
            return;
        }

        if (password.length < 8) {
            showError('Password must be at least 8 characters long');
            return;
        }

        submitForm(username, email, password);
    });

    function showError(message) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function submitForm(username, email, password) {
        console.log('Form submitted successfully');
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);
        
        form.reset();
        showError('Sign up successful!');
        window.location.href = "main.html";
    }
});
