// Animate sections on scroll
window.addEventListener('scroll', () => {
  document.querySelectorAll('section').forEach(sec => {
    if (sec.getBoundingClientRect().top < window.innerHeight - 100) {
      sec.classList.add('visible');
    }
  });
});

// Back to Top button
const topBtn = document.getElementById('topBtn');
window.onscroll = () => {
  topBtn.style.display = window.scrollY > 300 ? "block" : "none";
};
topBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
