/* ASCII particle portrait — canvas-based, inspired by gazijarin.com.
   Samples /img/tomas-portrait.png into a grid of mono characters, animates
   them assembling into place, then lets the cursor repel nearby particles
   with a spring pull back to their target position. */
function initPortrait() {
  const canvas = document.getElementById('portrait-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const RAMP = ".:-=+*#%@";
  const ACCENT = [100, 255, 218]; // --accent (#64ffda)
  const GAP_CSS = 4;
  const ASSEMBLE_MS = 1100;
  const REPEL_FORCE = 2.4;
  const SPRING = 0.045;
  const FRICTION = 0.9;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let particles = [];
  let w = 0, h = 0, dpr = 1, repelRadius = 0;
  let mouseX = -9999, mouseY = -9999;
  let startTime = 0;
  let img = null;

  function build() {
    const rect = canvas.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = Math.round(rect.width * dpr);
    h = Math.round(rect.height * dpr);
    canvas.width = w;
    canvas.height = h;

    const off = document.createElement('canvas');
    off.width = w;
    off.height = h;
    const octx = off.getContext('2d');
    octx.drawImage(img, 0, 0, w, h);
    const data = octx.getImageData(0, 0, w, h).data;

    const gap = Math.max(2, Math.round(GAP_CSS * dpr));
    repelRadius = w * 0.17;

    particles = [];
    for (let y = 0; y < h; y += gap) {
      for (let x = 0; x < w; x += gap) {
        const i = (y * w + x) * 4;
        const a = data[i + 3];
        if (a < 40) continue;
        const brightness = (data[i] + data[i + 1] + data[i + 2]) / 765;
        const rampIdx = Math.min(RAMP.length - 1, Math.floor(brightness * RAMP.length));
        const ang = Math.random() * Math.PI * 2;
        const dist = (80 + Math.random() * 140) * dpr;
        particles.push({
          tx: x, ty: y,
          x: x + Math.cos(ang) * dist,
          y: y + Math.sin(ang) * dist,
          vx: 0, vy: 0,
          char: RAMP[rampIdx],
          baseAlpha: (a / 255) * (0.35 + 0.65 * brightness),
          delay: Math.random() * 500,
          phase: Math.random() * Math.PI * 2,
        });
      }
    }

    const fontSize = gap * 1.6;
    ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    startTime = performance.now();
  }

  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouseX = (e.clientX - rect.left) * dpr;
    mouseY = (e.clientY - rect.top) * dpr;
  });
  canvas.addEventListener('mouseleave', () => {
    mouseX = -9999;
    mouseY = -9999;
  });

  function frame(now) {
    if (!w || !h) {
      requestAnimationFrame(frame);
      return;
    }
    const t = now - startTime;
    ctx.clearRect(0, 0, w, h);
    const [r, g, b] = ACCENT;

    for (const p of particles) {
      let alpha = p.baseAlpha;

      if (reduceMotion) {
        p.x = p.tx;
        p.y = p.ty;
      } else if (t < p.delay) {
        alpha = 0;
      } else if (t < p.delay + ASSEMBLE_MS) {
        if (p.sx === undefined) {
          p.sx = p.x;
          p.sy = p.y;
        }
        const localT = (t - p.delay) / ASSEMBLE_MS;
        const easeOut = 1 - Math.pow(1 - localT, 3);
        p.x = lerp(p.sx, p.tx, easeOut);
        p.y = lerp(p.sy, p.ty, easeOut);
        alpha = p.baseAlpha * (localT * localT);
      } else {
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < repelRadius && dist > 0.01) {
          const force = ((repelRadius - dist) / repelRadius) * REPEL_FORCE;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }
        p.vx += (p.tx - p.x) * SPRING;
        p.vy += (p.ty - p.y) * SPRING;
        p.vx *= FRICTION;
        p.vy *= FRICTION;
        p.x += p.vx;
        p.y += p.vy;
        alpha = p.baseAlpha * (0.82 + 0.18 * Math.sin(now * 0.0015 + p.phase));
      }

      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
      ctx.fillText(p.char, p.x, p.y);
    }
    requestAnimationFrame(frame);
  }

  function lerp(a, b, t) {
    return a + (b - a) * t;
  }

  function start() {
    build();
    requestAnimationFrame(frame);
  }

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(build, 200);
  });

  img = new Image();
  img.onload = start;
  img.src = '/img/tomas-portrait.png';
}
