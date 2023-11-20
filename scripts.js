// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//       e.preventDefault();
  
//       const targetId = this.getAttribute('href').substring(1);
//       const targetSection = document.getElementById(targetId);
  
//       window.scrollTo({
//         top: targetSection.offsetTop,
//         behavior: 'smooth'
//       });
//     });
//   });
console.log('Initializing...');

// window.addEventListener('load', () => {
//     console.log('codigo de desplazamiento');
//     window.addEventListener('scroll', () => {
//         console.log('codigo de scroll');
    
//         const scrollPosition = window.scrollY;
      
//         // Calcula qué página se debe mostrar según la posición de desplazamiento
//         const currentPage = Math.floor(scrollPosition / window.innerHeight) + 1;
      
//         // Actualiza el fondo de la página actual
//         document.querySelectorAll('.layout').forEach(page => {
//           page.style.backgroundColor = 'transparent';
//         });
//         document.querySelector(`.layout.page${currentPage}`).style.backgroundColor = `#f0f0f0`;
//       });
//   });
  