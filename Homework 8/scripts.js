// Enhanced client-side form handler for DanUptonPage3
document.addEventListener('DOMContentLoaded', function(){
  const form = document.querySelector('#contactForm');
  if(!form) return;
  const notice = document.createElement('div');
  notice.id = 'formNotice';
  form.appendChild(notice);

  // Utility to clear previous error highlights
  function clearErrors(){
    form.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));
    const inputs = form.querySelectorAll('input');
    inputs.forEach(i => i.removeAttribute('aria-invalid'));
  }

  // Focus & mark an element as error
  function markError(element){
    if(!element) return;
    element.classList.add('input-error');
    element.setAttribute('aria-invalid', 'true');
    try{ element.focus(); } catch(e){}
  }

  form.addEventListener('submit', function(e){
    e.preventDefault();
    clearErrors();
    notice.className = '';
    notice.textContent = '';

    const nameInput = form.querySelector('input[name="name"]');
    const emailInput = form.querySelector('input[name="email"]');
    const acceptInput = form.querySelector('input[name="accept"]');

    const name = nameInput ? nameInput.value.trim() : '';
    const email = emailInput ? emailInput.value.trim() : '';
    const accept = acceptInput ? acceptInput.checked : false;

    if(!name){
      markError(nameInput);
      notice.className = 'notice error';
      notice.textContent = 'Please enter your name.';
      return;
    }

    if(!email){
      markError(emailInput);
      notice.className = 'notice error';
      notice.textContent = 'Please enter your email.';
      return;
    }

    if(!accept){
      // mark the fieldset or the checkbox itself
      const fs = form.querySelector('fieldset');
      if(fs) fs.classList.add('input-error');
      markError(acceptInput);
      notice.className = 'notice error';
      notice.textContent = 'You must accept the terms to continue.';
      return;
    }

    // Simulate successful submission
    notice.className = 'notice success';
    notice.textContent = 'Thanks, ' + name + '! Your info was accepted (simulated).';
    form.reset();
    // clear any visuals after a short delay
    setTimeout(() => clearErrors(), 800);
  });
});
