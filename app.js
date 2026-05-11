let scale = 1;
const step = 0.1;
const min = 0.5;
const max = 2;
const content = document.getElementById('content');
const label = document.getElementById('zoom-label');

function applyZoom() {
  content.style.transformOrigin = 'top left';
  content.style.transform = `scale(${scale})`;
  content.style.width = `${100 / scale}%`;
  label.textContent = Math.round(scale * 100) + '%';
}

document.getElementById('zoom-in').addEventListener('click', () => {
  scale = Math.min(max, +(scale + step).toFixed(1));
  applyZoom();
});
document.getElementById('zoom-out').addEventListener('click', () => {
  scale = Math.max(min, +(scale - step).toFixed(1));
  applyZoom();
});
document.getElementById('zoom-reset').addEventListener('click', () => {
  scale = 1;
  applyZoom();
});

window.addEventListener('wheel', (e) => {
  if (!e.ctrlKey) return;
  e.preventDefault();
  scale = e.deltaY < 0
    ? Math.min(max, +(scale + step).toFixed(1))
    : Math.max(min, +(scale - step).toFixed(1));
  applyZoom();
}, { passive: false });
