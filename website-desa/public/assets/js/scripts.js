/* script.js */
const hamburgerMenu = document.querySelector('#hamburger-menu');
const navbarNav = document.querySelector('.navbar-nav');

hamburgerMenu.addEventListener('click', (e) => {
  navbarNav.classList.toggle('active');
  e.preventDefault();
});

// Click outside navbar to hide menu
document.addEventListener('click', function(e) {
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});

// Halaman 1 
document.addEventListener('DOMContentLoaded', function() {
  // Animate cards on scroll
  const cards = document.querySelectorAll('.bg-white');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
  });

  // Add click event for "Baca selengkapnya" links
  const readMoreLinks = document.querySelectorAll('.text-blue-600');
  readMoreLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const articleTitle = this.closest('.bg-white').querySelector('.text-xl').textContent;
      console.log(`Membuka artikel: ${articleTitle}`);
      // Add your logic here for handling article clicks
    });
  });
});


// Halaman 2
document.addEventListener('DOMContentLoaded', function() {
  const mapsSection = document.getElementById('maps');

  // Lazy loading untuk iframe maps
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const iframe = entry.target.querySelector('iframe');
        if (iframe.dataset.src) {
          iframe.src = iframe.dataset.src;
          iframe.removeAttribute('data-src');
        }
      }
    });
  }, {
    threshold: 0.1
  });

  observer.observe(mapsSection);

  // Animasi smooth scroll ke maps section
  document.querySelectorAll('a[href="#maps"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      mapsSection.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});    

// Sotk 
  // Initialize AOS
  AOS.init({
    duration: 1000,
    once: true,
    mirror: false
  });

  // Add hover animation
  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'scale(1.05)';
      card.style.transition = 'transform 0.3s ease';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'scale(1)';
      card.style.transition = 'transform 0.3s ease';
    });
  });


  // About JS
  document.addEventListener('DOMContentLoaded', function() {
    const sejarahContent = document.querySelector('.sejarah-content');
    
    function checkScroll() {
      const triggerBottom = window.innerHeight * 0.8;
      const contentTop = sejarahContent.getBoundingClientRect().top;
  
      if (contentTop < triggerBottom) {
        sejarahContent.classList.add('animate');
      }
    }
  
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check on initial load
  });