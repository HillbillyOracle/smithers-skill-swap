document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const messageEl = document.getElementById('message');

  // Simple demo credentials. Replace with real authentication.
  if (email === 'test@example.com' && password === 'password123') {
    messageEl.textContent = 'Login successful! 🎉';
    messageEl.style.color = '#00ff99';
  } else {
    messageEl.textContent = 'Invalid email or password';
    messageEl.style.color = '#ff3344';
  }
});
