import { useEffect, useRef } from 'react';

/**
 * High-performance canvas snowfall.
 *
 * Performance optimisations vs previous version:
 *  1. `position: fixed` — canvas NEVER repaints on scroll (biggest win).
 *  2. `will-change: transform` — browser promotes it to its own GPU layer.
 *  3. No `ctx.filter` blur — replaced with simple globalAlpha opacity trick for depth.
 *  4. No per-frame `createRadialGradient` — flakes are plain filled circles.
 *  5. Frame-time delta keeps motion smooth on 30/60/120 Hz displays.
 *  6. `getContext('2d', { alpha: true })` with `alpha: false` removed
 *     (background must be transparent so page content shows through).
 *  7. Visibility API pauses the loop when tab is hidden.
 */
const Snowfall = ({ count = 80 }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // alpha: true is required for transparency over page content
        const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true });

        // ── Resize ──────────────────────────────────────────────────────────────
        let W = 0, H = 0;
        const resize = () => {
            W = canvas.width = window.innerWidth;
            H = canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        // ── Wind ────────────────────────────────────────────────────────────────
        let windX = 0;
        let windTarget = 0;
        let windTtl = 0;

        // ── Flake factory ───────────────────────────────────────────────────────
        const makeFlake = (scatterY = false) => {
            const depth = Math.random();           // 0 = far, 1 = near
            return {
                x: Math.random() * W,
                y: scatterY ? Math.random() * H : -8,
                r: 0.6 + depth * 2.8,        // 0.6 – 3.4 px radius
                vy: 0.3 + depth * 1.8,        // px/s — scaled by dt below
                opacity: 0.15 + depth * 0.65,      // far = dim, near = bright
                drift: (Math.random() - 0.5) * 0.5,
                driftFreq: 0.003 + Math.random() * 0.008,
                driftAmp: 0.5 + Math.random() * 1.0,
                phase: Math.random() * Math.PI * 2,
            };
        };

        const flakes = Array.from({ length: count }, () => makeFlake(true));

        // ── Animation loop ──────────────────────────────────────────────────────
        let rafId;
        let lastT = 0;
        let elapsed = 0;               // seconds elapsed, drives sinusoidal drift

        const tick = (now) => {
            rafId = requestAnimationFrame(tick);

            const dt = Math.min((now - lastT) / 1000, 0.05); // seconds, capped at 50 ms
            lastT = now;
            elapsed += dt;

            // Wind gust interpolation
            windTtl -= dt;
            if (windTtl <= 0) {
                windTarget = (Math.random() - 0.5) * 20; // ±20 px/s gust
                windTtl = 3 + Math.random() * 6;          // new gust every 3–9 s
            }
            windX += (windTarget - windX) * (1 - Math.pow(0.01, dt)); // smooth

            ctx.clearRect(0, 0, W, H);

            for (const f of flakes) {
                // Physics (dt-scaled so speed is display-Hz independent)
                f.y += f.vy * dt * 60;
                f.x += (Math.sin(elapsed * f.driftFreq * 60 + f.phase) * f.driftAmp * f.drift
                    + windX * dt);

                // Horizontal wrap
                if (f.x < -8) f.x = W + 8;
                if (f.x > W + 8) f.x = -8;

                // Recycle off-bottom flakes
                if (f.y > H + 8) Object.assign(f, makeFlake(false));

                // Draw — simple anti-aliased circle, no filter/gradient allocations
                ctx.globalAlpha = f.opacity;
                ctx.beginPath();
                ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
                ctx.fillStyle = '#c8f0ce';
                ctx.fill();
            }
            ctx.globalAlpha = 1;
        };

        // Pause when tab is hidden (saves CPU/GPU entirely)
        const onVisibility = () => {
            if (document.hidden) {
                cancelAnimationFrame(rafId);
            } else {
                lastT = performance.now();
                rafId = requestAnimationFrame(tick);
            }
        };
        document.addEventListener('visibilitychange', onVisibility);

        lastT = performance.now();
        rafId = requestAnimationFrame(tick);

        return () => {
            cancelAnimationFrame(rafId);
            window.removeEventListener('resize', resize);
            document.removeEventListener('visibilitychange', onVisibility);
        };
    }, [count]);

    return (
        <canvas
            ref={canvasRef}
            aria-hidden="true"
            style={{
                position: 'fixed',        // ← KEY: never scrolls, never repaints on scroll
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                pointerEvents: 'none',
                zIndex: 1,
                display: 'block',
                willChange: 'transform',  // promotes to its own GPU layer
            }}
        />
    );
};

export default Snowfall;
