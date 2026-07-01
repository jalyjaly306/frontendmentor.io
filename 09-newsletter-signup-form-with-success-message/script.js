const signupForm = document.getElementById('signup-form');
const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('error-message');

// Regex function to validate email structure
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

signupForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Stop form from submitting automatically
  
  const emailValue = emailInput.value.trim();

  if (!isValidEmail(emailValue)) {
    // 1. Show the error state
    emailInput.classList.add('error');
    errorMessage.textContent = 'Valid email required';
    errorMessage.style.display = 'block';
  } else {
    // 2. Clear errors and proceed to success page if valid
    emailInput.classList.remove('error');
    errorMessage.style.display = 'none';
    
    const encodedEmail = encodeURIComponent(emailValue);
    window.location.href = `success.html?email=${encodedEmail}`;
  }
});

// Optional: Remove the error styling as soon as the user starts typing again
emailInput.addEventListener('input', () => {
  if (emailInput.classList.contains('error')) {
    emailInput.classList.remove('error');
    errorMessage.style.display = 'none';
  }
});