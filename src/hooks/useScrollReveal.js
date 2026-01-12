import { useEffect } from 'react';

// Observes elements with class `reveal-on-scroll` and adds `revealed` class when visible.
// Elements can specify an inline CSS variable `--reveal-delay: 120ms` to tweak delay per element.
export default function useScrollReveal() {
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          // read delay from CSS var (fallback to 40ms already in CSS)
          const style = getComputedStyle(el);
          const delay = style.getPropertyValue('--reveal-delay') || null;

          // small safety: parse ms value
          let delayMs = 0;
          if (delay) {
            const m = delay.trim().match(/([0-9]+)m?s?/);
            if (m) delayMs = parseInt(m[1], 10);
          }

          // apply revealed after the specified (small) delay using rAF for smoother paint
          const apply = () => {
            el.classList.add('revealed');
            obs.unobserve(el);
          };
          const wait = delayMs || 40;
          if (wait <= 16) {
            requestAnimationFrame(apply);
          } else {
            setTimeout(() => requestAnimationFrame(apply), wait);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -5% 0px', // trigger a bit earlier
        threshold: 0.02,
      }
    );

    let els = Array.from(document.querySelectorAll('.reveal-on-scroll'));

    // If user didn't add any .reveal-on-scroll classes, auto-apply to main children and common cards (.group)
    if (els.length === 0) {
      const mainChildren = Array.from(document.querySelectorAll('main > *'));
      mainChildren.forEach((el) => el.classList.add('reveal-on-scroll'));

      const groupsInMain = Array.from(document.querySelectorAll('main .group'));
      groupsInMain.forEach((el) => el.classList.add('reveal-on-scroll'));

      els = Array.from(document.querySelectorAll('.reveal-on-scroll'));
    }

    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
