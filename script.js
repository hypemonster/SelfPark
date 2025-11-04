// Redirecionamentos dos botões
const links = [
  ['reservarBtn', 'reservar.html'],
  ['loginBtn', 'login.html'],
  ['cadastroBtn', 'cadastro.html'],
  ['footerReservar', 'reservar.html'],
  ['footerLogin', 'login.html'],
  ['footerCadastro', 'cadastro.html']
];

links.forEach(([id, page]) => {
  const btn = document.getElementById(id);
  if (btn) {
    btn.addEventListener('click', () => {
      window.location.href = page;
    });
  }
});

// Logo leva à home
document.getElementById('homeLogo').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.getElementById('footerLogo').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Navbar animada ao rolar
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 100) {
    navbar.style.padding = '0.6rem 2rem';
    navbar.style.boxShadow = '0 3px 8px rgba(0,0,0,0.2)';
  } else {
    navbar.style.padding = '1rem 2rem';
    navbar.style.boxShadow = 'none';
  }
});
