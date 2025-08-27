document.addEventListener('DOMContentLoaded', function() {
    function updateTime() {
        const now = new Date();
        let hours = now.getHours();
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        if (hours === 0) {
            hours = 12;
        } else if (hours > 12) {
            hours -= 12;
        }
        document.getElementById('time-display').textContent = `${hours}:${minutes} ${ampm}`;
    }
    setInterval(updateTime, 1000);
    updateTime();
});
document.getElementById("ABTMETOGGLE").addEventListener("click", function() {
    let hidden = document.querySelector(".aboutme-cont");
    if (hidden.style.display === "none" || hidden.style.display === "") {
        hidden.style.display = 'block';
    } else {
        hidden.style.display = "none";
    }
});
document.querySelector(".aboutme-x").addEventListener("click", function () {
    document.querySelector(".aboutme-cont").style.display = "none";
});
document.getElementById("PORTTOGGLE").addEventListener("click", function() {
    let hidden = document.querySelector(".portfolio-cont");
    if (hidden.style.display === "none" || hidden.style.display === "") {
        hidden.style.display = 'block';
    } else {
        hidden.style.display = "none";
    }
});
document.querySelector(".portfolio-x").addEventListener("click", function () {
    document.querySelector(".portfolio-cont").style.display = "none";
});
const canvas = document.getElementById('nick-bouncer');
const ctx = canvas.getContext('2d', {alpha: true});
function sizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
sizeCanvas();
window.addEventListener('resize', sizeCanvas);
let x = Math.random() * (window.innerWidth * 0.7) + 50;
let y = Math.random() * (window.innerHeight * 0.7) + 50;
let vx = 1.2;
let vy = 0.8;
let hue = Math.floor(Math.random() * 360);
const label = 'Nick Gelineau';
const baseFont = 35;
function textMetrics() {
  ctx.font = `bold ${baseFont}px w95, monospace`;
  const m = ctx.measureText(label);
  const w = m.width;
  const h = baseFont:
  return { w, h };
}
function randomHueShift() {
  hue = (hue + 40 + Math.random() * 80) % 360;
}
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = `bold ${baseFont}px w95, monospace`;
  ctx.fillStyle = `hsl(${hue}, 85%, 55%)`;
  ctx.strokeStyle = 'rgba(0,0,0,0.35)';
  ctx.lineWidth = 4;
  ctx.shadowColor = 'rgba(0,0,0,0.25)';
  ctx.shadowBlur = 6;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.strokeText(label, x, y);
  ctx.fillText(label, x, y);
}
function step() {
  const { w, h } = textMetrics();
  const toolbar = document.querySelector(".bottom-toolbar");
  const toolbarHeight = toolbar ? toolbar.offsetHeight : 0;
  x += vx;
  y += vy;
  let bounced = false;
  if (x <= 0) {
    x = 0;
    vx = Math.abs(vx);
    bounced = true;
  }
  if (x + w >= canvas.width) {
    x = canvas.width - w;
    vx = -Math.abs(vx);
    bounced = true;
  }
  if (y - h * 0.8 <= 0) {
    y = h * 0.8;
    vy = Math.abs(vy);
    bounced = true;
  }
  const bottomLimit = canvas.height - toolbarHeight;
  if (y >= bottomLimit) {
    y = bottomLimit;
    vy = -Math.abs(vy);
    bounced = true;
  }
  if (bounced) randomHueShift();
  draw();
  requestAnimationFrame(step);
}
draw();
requestAnimationFrame(step);
