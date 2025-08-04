import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const supabaseUrl = 'https://your-project-url.supabase.co';
const supabaseAnonKey = 'your-anon-key';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const loginForm = document.getElementById('loginForm');
const changeEmailContainer = document.querySelector('.change-email');
const changeEmailLink = document.getElementById('changeEmail');

if (loginForm) {
  loginForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const messageEl = document.getElementById('message');
    messageEl.textContent = '';
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        messageEl.textContent = error.message;
        messageEl.style.color = '#ff3344';
        changeEmailContainer?.classList.remove('hidden');
      } else {
        messageEl.textContent = 'Login successful! 🎉';
        messageEl.style.color = '#00ff99';
        changeEmailContainer?.classList.add('hidden');
        setTimeout(() => {
          window.location.href = 'profile.html';
        }, 500);
      }
    } catch (err) {
      messageEl.textContent = 'Network error. Please try again.';
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
  resetForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    const email = document.getElementById('resetEmail').value;
    const messageEl = document.getElementById('resetMessage');
    messageEl.textContent = '';
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email);
      if (error) {
        messageEl.textContent = error.message;
        messageEl.style.color = '#ff3344';
      } else {
        messageEl.textContent = 'If an account with that email exists, a reset link has been sent.';
        messageEl.style.color = '#00ff99';
      }
    } catch (err) {
      messageEl.textContent = 'Network error. Please try again.';
      messageEl.style.color = '#ff3344';
    }
  });
}

const registerForm = document.getElementById('registerForm');
if (registerForm) {
  registerForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const messageEl = document.getElementById('registerMessage');
    messageEl.textContent = '';
    try {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) {
        messageEl.textContent = error.message;
        messageEl.style.color = '#ff3344';
      } else {
        messageEl.textContent = 'Registration successful! Check your email to confirm.';
        messageEl.style.color = '#00ff99';
        setTimeout(() => {
          window.location.href = 'login.html';
        }, 1000);
      }
    } catch (err) {
      messageEl.textContent = 'Network error. Please try again.';
      messageEl.style.color = '#ff3344';
    }
  });
}
