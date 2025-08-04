const loginForm = document.getElementById('loginForm');
const changeEmailContainer = document.querySelector('.change-email');
const changeEmailLink = document.getElementById('changeEmail');

if (loginForm) {
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const messageEl = document.getElementById('message');

    // Simple demo credentials. Replace with real authentication.
    if (email === 'test@example.com' && password === 'password123') {
      messageEl.textContent = 'Login successful! 🎉';
      messageEl.style.color = '#00ff99';
      changeEmailContainer?.classList.add('hidden');
      setTimeout(() => {
        window.location.href = 'profile.html';
      }, 500);
    } else {
      messageEl.textContent = 'Invalid email or password';
      messageEl.style.color = '#ff3344';
      changeEmailContainer?.classList.remove('hidden');
    }
  });
}

if (changeEmailLink) {
  changeEmailLink.addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    const messageEl = document.getElementById('message');
    messageEl.textContent = '';
    changeEmailContainer?.classList.add('hidden');
    document.getElementById('email').focus();
  });
}

const resetForm = document.getElementById('resetForm');
if (resetForm) {
  resetForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('resetEmail').value;
    const messageEl = document.getElementById('resetMessage');
    messageEl.textContent = 'If an account with that email exists, a reset link has been sent.';
    messageEl.style.color = '#00ff99';
  });
}

const registerForm = document.getElementById('registerForm');
if (registerForm) {
  registerForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('registerEmail').value;
    const messageEl = document.getElementById('registerMessage');
    messageEl.textContent = 'Registration successful! You can now log in.';
    messageEl.style.color = '#00ff99';
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1000);
  });
}
