import { useEffect, useRef } from 'react';

// Encrypted text effect — inspired by the component in /componets/encripted text.jsx
export default function EncryptedText({ text, className = '', speed = 40 }) {
  const ref = useRef(null);
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&';

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let iteration = 0;
    let interval;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        interval = setInterval(() => {
          el.textContent = text
            .split('')
            .map((char, idx) => {
              if (char === ' ') return ' ';
              if (idx < iteration) return text[idx];
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('');
          if (iteration >= text.length) clearInterval(interval);
          iteration += 0.5;
        }, speed);
        observer.disconnect();
      }
    }, { threshold: 0.5 });

    observer.observe(el);
    return () => { clearInterval(interval); observer.disconnect(); };
  }, [text, speed]);

  return <span ref={ref} className={className}>{text}</span>;
}
