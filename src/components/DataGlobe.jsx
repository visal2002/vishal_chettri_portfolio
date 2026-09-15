import React, { useEffect, useRef } from 'react';
export default function DataGlobe() {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame,
      width = 0,
      height = 0,
      rotation = 0,
      visible = true,
      last = 0;
    const draw = time => {
      const delta = last ? Math.min(time - last, 40) : 0;
      last = time;
      if (!media.matches) rotation += delta * 0.000065;
      ctx.clearRect(0, 0, width, height);
      const radius = Math.min(width, height) * 0.375;
      const project = (lat, lon) => {
        const x = Math.cos(lat) * Math.cos(lon + rotation);
        const z = Math.cos(lat) * Math.sin(lon + rotation);
        const y = Math.sin(lat);
        const tilt = -0.28;
        return {
          x: width / 2 + (x * Math.cos(tilt) - y * Math.sin(tilt)) * radius,
          y: height / 2 + (x * Math.sin(tilt) + y * Math.cos(tilt)) * radius,
          z
        };
      };
      for (let row = 1; row < 32; row++) {
        const lat = -Math.PI / 2 + row * Math.PI / 32;
        for (let col = 0; col < 64; col++) {
          const lon = col * Math.PI * 2 / 64;
          const p = project(lat, lon);
          const next = project(lat, lon + Math.PI * 2 / 64);
          ctx.strokeStyle = `rgba(209, 89, 48, ${0.035 + (p.z + 1) * 0.07})`;
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(next.x, next.y);
          ctx.stroke();
          ctx.fillStyle = `rgba(210, 83, 43, ${0.1 + (p.z + 1) * 0.3})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.z > 0.4 ? 1.25 : 0.8, 0, Math.PI * 2);
          ctx.fill();
          if (col % 4 === 0 && row < 31) {
            const down = project(lat + Math.PI / 32, lon);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(down.x, down.y);
            ctx.stroke();
          }
        }
      }
      if (visible && !document.hidden && !media.matches) frame = requestAnimationFrame(draw);
    };
    const restart = () => {
      cancelAnimationFrame(frame);
      last = 0;
      if (visible && !document.hidden) frame = requestAnimationFrame(draw);
    };
    const resize = new ResizeObserver(([entry]) => {
      width = entry.contentRect.width;
      height = entry.contentRect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      restart();
    });
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      restart();
    });
    resize.observe(canvas);
    observer.observe(canvas);
    document.addEventListener('visibilitychange', restart);
    media.addEventListener('change', restart);
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      observer.disconnect();
      document.removeEventListener('visibilitychange', restart);
      media.removeEventListener('change', restart);
    };
  }, []);
  return <canvas ref={ref} className="data-globe" aria-hidden="true" />;
}
