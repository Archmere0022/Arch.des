// Handle login
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPassword').value;

      // Dummy login validation
      if (email === "test@example.com" && password === "password") {
        alert("Login successful!");
      } else {
        alert("Invalid email or password.");
      }
    });
  }

  // Handle register
  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('registerUsername').value;
      const email = document.getElementById('registerEmail').value;
      const password = document.getElementById('registerPassword').value;

      // Dummy register validation
      if (username && email && password.length >= 6) {
        alert("Registration successful!");
        window.location.href = "login.html";
      } else {
        alert("Please fill out all fields correctly.");
      }
    });
  }
});
