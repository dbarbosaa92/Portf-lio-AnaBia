    // ---- Scroll Reveal ----
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 80);
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => observer.observe(el));

    // ---- Skill bars animados ao entrar na viewport ----
    const bars = document.querySelectorAll('.skill-bar-fill');
    const barObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.width = e.target.dataset.pct + '%';
          barObserver.unobserve(e.target);
        }
      });
    }, { threshold: 0.3 });
    bars.forEach(b => barObserver.observe(b));

    // ---- Active nav link no scroll ----
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 80) current = s.id;
      });
      navLinks.forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + current
          ? 'var(--color-primary)' : '';
      });
    }, { passive: true });

    // ---- Formulário (simulado) ----
    function handleForm(e) {
      e.preventDefault();
      const msg = document.getElementById('form-msg');
      msg.style.display = 'block';
      setTimeout(() => msg.style.display = 'none', 4000);
    }
