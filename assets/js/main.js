(function () {
  var body = document.body;
  var menuButton = document.querySelector('.menu-btn');
  var dropdownTriggers = document.querySelectorAll('.nav-trigger');

  if (menuButton) {
    menuButton.addEventListener('click', function () {
      body.classList.toggle('menu-open');
      menuButton.setAttribute('aria-expanded', body.classList.contains('menu-open') ? 'true' : 'false');
    });
  }

  dropdownTriggers.forEach(function (trigger) {
    trigger.addEventListener('click', function (event) {
      if (window.innerWidth <= 1050) {
        event.preventDefault();
        var item = trigger.closest('.has-dropdown');
        item.classList.toggle('open');
        trigger.setAttribute('aria-expanded', item.classList.contains('open') ? 'true' : 'false');
      }
    });
  });

  document.querySelectorAll('.nav a').forEach(function (link) {
    link.addEventListener('click', function () {
      if (window.innerWidth <= 1050) {
        body.classList.remove('menu-open');
        if (menuButton) menuButton.setAttribute('aria-expanded', 'false');
      }
    });
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 1050) {
      body.classList.remove('menu-open');
      document.querySelectorAll('.has-dropdown.open').forEach(function (item) {
        item.classList.remove('open');
      });
    }
  });

  document.querySelectorAll('.faq-q').forEach(function (button) {
    button.addEventListener('click', function () {
      var item = button.closest('.faq-item');
      item.classList.toggle('open');
      button.setAttribute('aria-expanded', item.classList.contains('open') ? 'true' : 'false');
    });
  });

  var revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(function (item) { observer.observe(item); });
  } else {
    revealItems.forEach(function (item) { item.classList.add('in'); });
  }

  document.querySelectorAll('[data-appointment-form]').forEach(function (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var data = new FormData(form);
      var name = (data.get('name') || '').toString().trim();
      var phone = (data.get('phone') || '').toString().trim();
      var service = (data.get('service') || 'General consultation').toString();
      var branch = (data.get('branch') || 'Any Delhi branch').toString();
      var message = (data.get('message') || '').toString().trim();

      if (!name || !phone) {
        showFormStatus(form, 'Please enter your name and phone number.', false);
        return;
      }

      var text = 'Hello Adorable Clinic, I would like to request an appointment.\n\n' +
        'Name: ' + name + '\n' +
        'Phone: ' + phone + '\n' +
        'Treatment: ' + service + '\n' +
        'Preferred branch: ' + branch +
        (message ? '\nMessage: ' + message : '');

      showFormStatus(form, 'Opening WhatsApp with your appointment details…', true);
      window.open('https://wa.me/919711150928?text=' + encodeURIComponent(text), '_blank', 'noopener');
    });
  });

  function showFormStatus(form, message, ok) {
    var status = form.querySelector('.form-status');
    if (!status) return;
    status.textContent = message;
    status.classList.add('show');
    status.style.background = ok ? '#eaf7f4' : '#fff0f0';
    status.style.color = ok ? '#1f6d5d' : '#9a3434';
  }

  document.querySelectorAll('[data-year]').forEach(function (node) {
    node.textContent = new Date().getFullYear();
  });
})();
