
      const navbar = document.getElementById('navbar');
      const footer = document.querySelector('footer');

      function checkNavbarVisibility() {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight,
          document.body.offsetHeight,
          document.documentElement.offsetHeight,
          document.body.clientHeight,
          document.documentElement.clientHeight
        );
        
        if (scrollPosition + windowHeight >= documentHeight - 100) {
          navbar.style.transition = 'all 0.3s ease-in-out';
          navbar.style.transform = 'translateY(-100%)';
          navbar.style.opacity = '0';
        } else {
          navbar.style.transition = 'all 0.3s ease-in-out';
          navbar.style.transform = 'translateY(0)';
          navbar.style.opacity = '1';
        }
      }

      document.addEventListener('DOMContentLoaded', function() {
        window.addEventListener('scroll', checkNavbarVisibility);
      });
