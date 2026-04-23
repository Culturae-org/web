"use client";
import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';

const hash = (x, y) => {
  const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453123;
  return s - Math.floor(s);
};

export default function AsciiCanvas({ className = "" }) {
  const canvasRef = useRef(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const isLight = resolvedTheme === 'light';
    const bgColor = isLight ? '#FAFAFA' : '#0A0A0A';
    const fgColorRGB = isLight ? '15, 15, 15' : '232, 230, 224';

    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;
    let rafId = 0;
    let time = 0;

    let stars = [];
    const mouse = { x: -1000, y: -1000 };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      cols = width < 768 ? 80 : 140;
      const cellW = width / cols;
      const cellH = cellW * 1.18;
      rows = Math.ceil(height / cellH);

      // Initialize stars
      stars = [];
      const numStars = width < 768 ? 30 : 60;
      const types = ['*', '+', '✧', '✦'];
      for (let i = 0; i < numStars; i++) {
        stars.push({
          c: Math.random() * cols,
          r: Math.random() * rows,
          vc: (Math.random() - 0.5) * 0.08,
          vr: (Math.random() - 0.5) * 0.08,
          pulse: Math.random() * Math.PI * 2,
          char: types[Math.floor(Math.random() * types.length)]
        });
      }
    };

    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const getLineChar = (x0, y0, x1, y1) => {
      const dx = x1 - x0;
      const dy = y1 - y0;
      let a = Math.atan2(dy, dx);
      if (a < 0) a += Math.PI;
      const PI = Math.PI;
      if (a < PI / 8 || a >= 7 * PI / 8) return '-';
      if (a >= PI / 8 && a < 3 * PI / 8) return '\\';
      if (a >= 3 * PI / 8 && a < 5 * PI / 8) return '|';
      if (a >= 5 * PI / 8 && a < 7 * PI / 8) return '/';
      return '-';
    };

    const drawLine = (grid, x0, y0, x1, y1, intensityGrid, connectDist) => {
      let currentX = Math.round(x0);
      let currentY = Math.round(y0);
      const endX = Math.round(x1);
      const endY = Math.round(y1);

      const dx = Math.abs(endX - currentX);
      const dy = Math.abs(endY - currentY);
      const sx = currentX < endX ? 1 : -1;
      const sy = currentY < endY ? 1 : -1;
      let err = dx - dy;

      const char = getLineChar(x0, y0, x1, y1);
      const length = Math.hypot(endX - currentX, endY - currentY);

      while (true) {
        if (currentX >= 0 && currentX < cols && currentY >= 0 && currentY < rows) {
          const currentVal = grid[currentY][currentX];
          if (!currentVal || "-|/\\".includes(currentVal)) {
            grid[currentY][currentX] = char;
            intensityGrid[currentY][currentX] = Math.max(
              intensityGrid[currentY][currentX] || 0,
              0.45 * (1 - (length / connectDist))
            );
          }
        }
        if (currentX === endX && currentY === endY) break;
        const e2 = 2 * err;
        if (e2 > -dy) { err -= dy; currentX += sx; }
        if (e2 < dx) { err += dx; currentY += sy; }
      }
    };

    const draw = () => {
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, width, height);

      time += 0.015;

      const cellW = width / cols;
      const cellH = cellW * 1.18;

      // Update stars
      for (const s of stars) {
        s.c += s.vc;
        s.r += s.vr;

        // Mouse repulse effect
        const sX = s.c * cellW;
        const sY = s.r * cellH;
        const dx = sX - mouse.x;
        const dy = sY - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200) {
          const force = (200 - dist) / 200;
          s.c += (dx / dist) * force * 0.1;
          s.r += (dy / dist) * force * 0.1;
        }

        // Screen wrap
        if (s.c < 0) s.c = cols;
        if (s.c > cols) s.c = 0;
        if (s.r < 0) s.r = rows;
        if (s.r > rows) s.r = 0;
      }

      const grid = Array(rows).fill(0).map(() => Array(cols).fill(null));
      const intensityGrid = Array(rows).fill(0).map(() => Array(cols).fill(0));

      const connectDist = Math.min(cols, rows) * 0.25;
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const s1 = stars[i];
          const s2 = stars[j];
          const distance = Math.hypot(s1.c - s2.c, s1.r - s2.r);

          if (distance < connectDist) {
            drawLine(grid, s1.c, s1.r, s2.c, s2.r, intensityGrid, connectDist);
          }
        }
      }

      for (const s of stars) {
        const rc = Math.round(s.c);
        const rr = Math.round(s.r);
        if (rc >= 0 && rc < cols && rr >= 0 && rr < rows) {
          grid[rr][rc] = s.char;
          const pulse = Math.sin(time * 2 + s.pulse) * 0.3 + 0.7; // 0.4 to 1.0
          intensityGrid[rr][rc] = pulse;
        }
      }

      ctx.font = `${cellH * 0.84}px "Fragment Mono", monospace`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * cellW + cellW / 2;
          const y = r * cellH + cellH / 2;
          let char = grid[r][c];
          let intensity = intensityGrid[r][c];

          if (!char) {
            const h = hash(c, r);
            if (h > 0.94) {
              char = h > 0.98 ? '+' : h > 0.96 ? '·' : '.';
              const twinkle = Math.sin(time * 2 + h * 100) * 0.5 + 0.5;
              intensity = (h - 0.94) * 10 * twinkle * 0.3;
            }
          }

          if (char && intensity > 0) {
            const distToMouse = Math.hypot(x - mouse.x, y - mouse.y);
            let glow = 0;
            if (distToMouse < 250) {
              glow = (1 - distToMouse / 250) * 0.6;
            }

            const finalIntensity = intensity + glow;
            const opacity = Math.min(1, Math.max(0.05, finalIntensity));

            ctx.fillStyle = `rgba(${fgColorRGB}, ${opacity})`;
            ctx.fillText(char, x, y);
          }
        }
      }

      rafId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouseMove);

    document.fonts.ready.then(() => {
      resize();
    });

    resize();
    draw();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [mounted, resolvedTheme]);

  if (!mounted) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'block',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
}
