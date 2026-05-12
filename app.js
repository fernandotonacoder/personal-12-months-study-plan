// ── Zoom ─────────────────────────────────────────────────────────────────────
let scale = 1;
const step = 0.1;
const min = 0.5;
const max = 2;
const content = document.getElementById("content");
const label = document.getElementById("zoom-label");

function applyZoom() {
  content.style.transformOrigin = "top left";
  content.style.transform = `scale(${scale})`;
  content.style.width = `${100 / scale}%`;
  label.textContent = Math.round(scale * 100) + "%";
}

document.getElementById("zoom-in").addEventListener("click", () => {
  scale = Math.min(max, +(scale + step).toFixed(1));
  applyZoom();
});
document.getElementById("zoom-out").addEventListener("click", () => {
  scale = Math.max(min, +(scale - step).toFixed(1));
  applyZoom();
});
document.getElementById("zoom-reset").addEventListener("click", () => {
  scale = 1;
  applyZoom();
});

window.addEventListener(
  "wheel",
  (e) => {
    if (!e.ctrlKey) return;
    e.preventDefault();
    scale =
      e.deltaY < 0
        ? Math.min(max, +(scale + step).toFixed(1))
        : Math.max(min, +(scale - step).toFixed(1));
    applyZoom();
  },
  { passive: false },
);

// ── Render helpers ────────────────────────────────────────────────────────────
function resItem({ text, platform }) {
  const plat = platform
    ? ` <span class="res-platform">(${platform})</span>`
    : "";
  return `<div class="res-item"><span class="res-icon">▸</span><span>${text}${plat}</span></div>`;
}

function certBadge({ state, text, sub }) {
  const subHtml = sub ? `<span class="cert-sub">${sub}</span>` : "";
  return `<div class="cert-badge ${state}">${text}${subHtml}</div>`;
}

function renderRow(entry) {
  if (entry.type === "sep") {
    return `<tr class="sep-row"><td colspan="5">${entry.label}</td></tr>`;
  }

  const pills = entry.pills
    .map(
      (p) =>
        `<span class="pill ${p.cls}"><span class="pill-dot"></span>${p.label}</span>`,
    )
    .join("");

  const resources = entry.resources.map(resItem).join("");
  const official = entry.official.map(certBadge).join("");
  const notes = entry.notes.join("<br>");
  const milestone = entry.milestone
    ? `<div><span class="milestone">${entry.milestone}</span></div>`
    : "";

  return `<tr>
      <td><span class="month-label">${entry.month}</span></td>
      <td><div class="pills">${pills}</div></td>
      <td>${resources}</td>
      <td>${official}</td>
      <td class="notes-col">${notes}${milestone}</td>
    </tr>`;
}

function renderApproachBox() {
  const platforms = approach.platforms
    .map(
      (p) =>
        `<div>· ${p.name} <span class="approach-note">(${p.note})</span></div>`,
    )
    .join("");
  return `
    <div><strong>Abordagem:</strong> ${approach.intro}</div>
    <div><strong>Plataformas:</strong></div>
    ${platforms}
  `;
}

function renderLegend() {
  return categories
    .map(
      (c) =>
        `<div class="legend-item ${c.cls}"><div class="dot"></div>${c.label}</div>`,
    )
    .join("");
}

// ── Boot ──────────────────────────────────────────────────────────────────────
document.getElementById("approach").innerHTML = renderApproachBox();
document.getElementById("legend").innerHTML = renderLegend();
document.querySelector("tbody").innerHTML = plan.map(renderRow).join("");
