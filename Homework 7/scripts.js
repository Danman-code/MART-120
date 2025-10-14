// Simple client-side form handler for DanUptonPage3
document.addEventListener('DOMContentLoaded', function(){
  const form = document.querySelector('#contactForm');
  if(!form) return;
  const notice = document.createElement('div');
  notice.id = 'formNotice';
  form.appendChild(notice);

  form.addEventListener('submit', function(e){
    e.preventDefault();
    notice.className = '';
    notice.textContent = '';
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const accept = form.accept.checked;
    if(!name || !email){
      notice.className = 'notice error';
      notice.textContent = 'Please provide both name and email.';
      return;
    }
    if(!accept){
      notice.className = 'notice error';
      notice.textContent = 'You must accept the terms to continue.';
      return;
    }
    // Simulate successful submission
    notice.className = 'notice success';
    notice.textContent = 'Thanks, ' + name + '! Your info was accepted (simulated).';
    form.reset();
  });
});
