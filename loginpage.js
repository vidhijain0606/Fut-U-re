document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (you can expand this)
    if (username === '' || password === '') {
        document.getElementById('message').innerText = 'Please fill in all fields.';
        return;
    }

    // Simulate successful login (you can replace this with real authentication)
    document.getElementById('message').innerText = 'Login successful! Welcome, ' + username + '!';
    window.location.href = "main.html";
});
