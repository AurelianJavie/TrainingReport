// simple live “last login” stamp
document.addEventListener('DOMContentLoaded', () => {
  const d = new Date();
  document.getElementById('lastLogin').textContent =
    d.toLocaleDateString('en-US', {year:'numeric', month:'short', day:'numeric'});
});
// --- LEAVES FALLING EFFECT ---
document.addEventListener('DOMContentLoaded', () => {
  const leafContainer = document.getElementById('leaves-container');
  const leafCount = 20; // 🌿 adjust this value for intensity (e.g., 10 = fewer, 50 = heavy fall)

  for (let i = 0; i < leafCount; i++) {
    const leaf = document.createElement('div');
    leaf.classList.add('leaf');
    leaf.style.left = Math.random() * 100 + 'vw';
    leaf.style.animationDuration = 5 + Math.random() * 5 + 's'; // random speed
    leaf.style.animationDelay = Math.random() * 5 + 's';
    leaf.style.transform = `rotate(${Math.random() * 360}deg)`;
    leafContainer.appendChild(leaf);
  }
});
