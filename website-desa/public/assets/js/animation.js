
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  
  navbar.style.transition = 'background-color 0.3s ease-in-out';
  
  if (scrollPosition === 0 || (scrollPosition + windowHeight) >= documentHeight) {
    navbar.style.backgroundColor = 'transparent';
  } else {
    navbar.style.backgroundColor = 'var(--bg)';
  }
});
