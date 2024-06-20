document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    const errorMessages = document.querySelectorAll('.error-message');
  
    successMessage.style.display = 'none';
  
    errorMessages.forEach(message => {
      message.style.display = 'none';
    });
  
    form.addEventListener('submit', function (e) {
      let valid = true;
  
      // Hide all error messages initially
      errorMessages.forEach(message => {
        message.style.display = 'none';
      });
  
      // Validate First Name
      if (!form.fname.value.trim()) {
        showError(form.fname);
        valid = false;
      } else {
        hideError(form.fname);
      }
  
      // Validate Last Name
      if (!form.lname.value.trim()) {
        showError(form.lname);
        valid = false;
      } else {
        hideError(form.lname);
      }
  
      // Validate Email
      if (!form.email.value.trim() || !validateEmail(form.email.value.trim())) {
        showError(form.email);
        valid = false;
      } else {
        hideError(form.email);
      }
  
      // Validate Query Type
      if (!document.querySelector('input[name="query"]:checked')) {
        showError(document.querySelector('.query_type'));
        valid = false;
      } else {
        hideError(document.querySelector('.query_type'));
      }
  
      // Validate Message
      if (!form.message.value.trim()) {
        showError(form.message);
        valid = false;
      } else {
        hideError(form.message);
      }
  
      // Validate Consent
      if (!form.consent.checked) {
        showError(form.consent);
        valid = false;
      } else {
        hideError(form.consent);
      }
  
      if (!valid) {
        e.preventDefault();
      } else {
        e.preventDefault();
        form.reset();
        successMessage.style.display = 'block';
        setTimeout(() => {
          successMessage.style.display = 'none';
        }, 5000);
      }
    });
  
    function showError(element) {
      element.style.borderColor = 'var(--Red)';
      const errorElement = element.parentElement.querySelector('.error-message');
      if (errorElement) {
        errorElement.style.display = 'block';
      }
    }
  
    function hideError(element) {
      element.style.borderColor = 'var(--Grey-500)';
      const errorElement = element.parentElement.querySelector('.error-message');
      if (errorElement) {
        errorElement.style.display = 'none';
      }
    }
  
    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
    }
  });
  