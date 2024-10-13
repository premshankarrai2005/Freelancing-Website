
document.addEventListener('scroll', () => {
  const boxes = document.querySelectorAll('.box');
  const screenHeight = window.innerHeight;

  boxes.forEach(box => {
      const boxPosition = box.getBoundingClientRect().top;

      // Trigger animation when the box comes into view
      if (boxPosition < screenHeight) {
          if (box.dataset.animation === 'left') {
              box.classList.add('animate-slide-in-left');
          } else if (box.dataset.animation === 'right') {
              box.classList.add('animate-slide-in-right');
          }
      }
  });
});



  document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
      link.addEventListener('click', function () {
        links.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
      });
    });
  });

//ABOUT PAGE

   // Scroll Reveal Effect
   document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.fade-in-up');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => {
        observer.observe(el);
    });
});