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
// --- Diary switcher ---
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.diary-btn');
  const viewer = document.getElementById('diary-viewer');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active state from all
      buttons.forEach(b => b.classList.remove('active'));
      // Set active
      btn.classList.add('active');
      // Load PDF
      viewer.src = btn.getAttribute('data-src');
    });
  });

  // Optional: highlight first button on load
  if (buttons.length > 0) buttons[0].classList.add('active');
});
