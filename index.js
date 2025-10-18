// simple live “last login” stamp
document.addEventListener('DOMContentLoaded', () => {
  const d = new Date();
  document.getElementById('lastLogin').textContent =
    d.toLocaleDateString('en-US', {year:'numeric', month:'short', day:'numeric'});
});
